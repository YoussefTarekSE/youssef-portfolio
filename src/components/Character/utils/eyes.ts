import * as THREE from "three";

// Target iris brown (RGB). Tweak if you want lighter/darker eyes.
const BROWN = { r: 110, g: 72, b: 42 };

/**
 * Recolours the character's iris from the model's purple to brown.
 *
 * The iris colour is baked into the eye base-colour texture (used ONLY by
 * `EyesMaterial.001`), so we read that texture into a canvas, replace the
 * purple/violet pixels with brown while preserving their shading, and swap in
 * the recoloured texture. The white of the eye and the pupil are left alone.
 */
const recolorEyes = (character: THREE.Object3D): boolean => {
  let eyeMat: THREE.MeshStandardMaterial | null = null;

  character.traverse((child: any) => {
    if (!child.isMesh) return;
    const mats = Array.isArray(child.material) ? child.material : [child.material];
    for (const m of mats) {
      if (m && /eyes?material/i.test(m.name || "") && m.map) {
        eyeMat = m;
      }
    }
  });

  if (!eyeMat) {
    console.warn("[eyes] EyesMaterial not found — skipping recolor");
    return false;
  }

  const srcMap: THREE.Texture = (eyeMat as THREE.MeshStandardMaterial).map!;
  const img: any = srcMap.image;
  if (!img || !img.width || !img.height) {
    console.warn("[eyes] eye texture not ready — skipping recolor");
    return false;
  }

  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(img, 0, 0);

  const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const px = data.data;
  for (let i = 0; i < px.length; i += 4) {
    const r = px[i], g = px[i + 1], b = px[i + 2];
    // Detect bluish-purple iris pixels (R and B clearly above G, saturated).
    const isPurple =
      r > 45 && b > 45 && g < r && g < b && b - g > 22 && r - g > 8;
    if (isPurple) {
      const lum = (0.3 * r + 0.59 * g + 0.11 * b) / 255; // 0..1 shading
      const f = 0.55 + lum; // keep iris depth/highlights
      px[i] = Math.min(255, BROWN.r * f);
      px[i + 1] = Math.min(255, BROWN.g * f);
      px[i + 2] = Math.min(255, BROWN.b * f);
    }
  }
  ctx.putImageData(data, 0, 0);

  const newTex = new THREE.CanvasTexture(canvas);
  newTex.flipY = srcMap.flipY;
  newTex.colorSpace = srcMap.colorSpace;
  newTex.wrapS = srcMap.wrapS;
  newTex.wrapT = srcMap.wrapT;
  newTex.channel = (srcMap as any).channel ?? 0;
  newTex.needsUpdate = true;

  (eyeMat as THREE.MeshStandardMaterial).map = newTex;
  (eyeMat as THREE.MeshStandardMaterial).needsUpdate = true;
  return true;
};

export default recolorEyes;
