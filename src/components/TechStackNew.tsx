import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

const ICON = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}.svg`;

// Youssef's stack — testing & QA front and centre, then full-stack.
// Pyramid: 8 -> 6 -> 5 -> 4 -> 3 -> 2
const techStack: TechItem[][] = [
  // Row 1 - Languages
  [
    { name: "JavaScript", icon: ICON("javascript/javascript-original"), url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", icon: ICON("typescript/typescript-original"), url: "https://typescriptlang.org" },
    { name: "Python", icon: ICON("python/python-original"), url: "https://python.org" },
    { name: "Java", icon: ICON("java/java-original"), url: "https://www.java.com" },
    { name: "PHP", icon: ICON("php/php-original"), url: "https://php.net" },
    { name: "Kotlin", icon: ICON("kotlin/kotlin-original"), url: "https://kotlinlang.org" },
    { name: "Dart", icon: ICON("dart/dart-original"), url: "https://dart.dev" },
    { name: "C++", icon: ICON("cplusplus/cplusplus-original"), url: "https://isocpp.org" },
  ],
  // Row 2 - Web & Mobile
  [
    { name: "React", icon: ICON("react/react-original"), url: "https://react.dev" },
    { name: "HTML", icon: ICON("html5/html5-original"), url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: ICON("css3/css3-original"), url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Node.js", icon: ICON("nodejs/nodejs-original"), url: "https://nodejs.org" },
    { name: "Express", icon: ICON("express/express-original"), url: "https://expressjs.com" },
    { name: "Flutter", icon: ICON("flutter/flutter-original"), url: "https://flutter.dev" },
  ],
  // Row 3 - Testing & QA
  [
    { name: "Cypress", icon: ICON("cypressio/cypressio-original"), url: "https://www.cypress.io" },
    { name: "Selenium", icon: ICON("selenium/selenium-original"), url: "https://www.selenium.dev" },
    { name: "Postman", icon: ICON("postman/postman-original"), url: "https://postman.com" },
    { name: "Jira", icon: ICON("jira/jira-original"), url: "https://www.atlassian.com/software/jira" },
    { name: "Azure DevOps", icon: ICON("azuredevops/azuredevops-original"), url: "https://azure.microsoft.com/products/devops" },
  ],
  // Row 4 - Databases
  [
    { name: "MySQL", icon: ICON("mysql/mysql-original"), url: "https://mysql.com" },
    { name: "Oracle", icon: ICON("oracle/oracle-original"), url: "https://www.oracle.com/database/" },
    { name: "MongoDB", icon: ICON("mongodb/mongodb-original"), url: "https://mongodb.com" },
    { name: "R", icon: ICON("r/r-original"), url: "https://www.r-project.org" },
  ],
  // Row 5 - Tools
  [
    { name: "Git", icon: ICON("git/git-original"), url: "https://git-scm.com" },
    { name: "GitHub", icon: ICON("github/github-original"), url: "https://github.com" },
    { name: "VS Code", icon: ICON("vscode/vscode-original"), url: "https://code.visualstudio.com" },
  ],
  // Row 6 - tip
  [
    { name: "Figma", icon: ICON("figma/figma-original"), url: "https://figma.com" },
    { name: "Vercel", icon: ICON("vercel/vercel-original"), url: "https://vercel.com" },
  ],
];

const TechStackNew = () => {
  return (
    <div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>

        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                >
                  <img src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
