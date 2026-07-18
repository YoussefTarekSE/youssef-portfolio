export const config = {
    developer: {
        name: "Youssef",
        fullName: "Youssef Tarek",
        title: "Software QA & Full-Stack Engineer",
        description: "Software QA & Full-Stack Engineer who tests and builds reliable web and mobile applications — pairing a tester's eye for breaking things with a builder's drive to ship them right."
    },
    social: {
        github: "YoussefTarekSE",
        email: "youssef.tarek12004@gmail.com",
        location: "Cairo, Egypt"
    },
    about: {
        title: "About Me",
        description: "I'm Youssef Tarek, a Software Engineering student at the Arab Academy for Science, Technology & Maritime Transport in Cairo (graduating 2026), focused on software quality assurance and full-stack development. I've tested real-world products at Link Development, applied QA methodologies across smart-city and enterprise projects, and built full-stack web and mobile applications end-to-end. I pair a tester's instinct for finding what breaks with a builder's drive to ship it right — from manual and automated testing to clean, reliable delivery."
    },
    experiences: [
        {
            position: "Cybersecurity Intern",
            company: "IDSC — Council of Ministers of Egypt",
            period: "2025",
            location: "Cairo, Egypt",
            description: "Hands-on training with the General Administration of Information Security, working alongside the Head of Cybersecurity on government-level security management.",
            responsibilities: [
                "Practiced penetration testing, risk management, and incident response",
                "Worked with encryption and compliance frameworks",
                "Applied secure network design principles to real institutional systems",
                "Studied government-level security operations firsthand"
            ],
            technologies: ["Penetration Testing", "Risk Management", "Incident Response", "Encryption", "Compliance"]
        },
        {
            position: "QC Software Testing Intern",
            company: "Link Development",
            period: "2025",
            location: "Cairo, Egypt",
            description: "Designed and executed manual test cases across two real-world software projects, owning the full defect lifecycle within structured Azure DevOps workflows.",
            responsibilities: [
                "Wrote and ran manual test cases — functional, usability, security, and regression",
                "Tracked defects through full fix-and-retest cycles in Azure DevOps",
                "Applied usability and security checklists during product evaluations",
                "Explored performance testing techniques"
            ],
            technologies: ["Manual Testing", "Azure DevOps", "Regression", "Security Checklists", "UAT"]
        },
        {
            position: "Smart Cities & Software Engineering Intern",
            company: "Talaat Moustafa Group (TMG)",
            period: "2024",
            location: "Cairo, Egypt",
            description: "Applied STLC and SDLC methodologies to smart-city software modules and analysed city-wide operational data for the engineering team.",
            responsibilities: [
                "Conducted data analysis on city-wide alarm and lighting systems",
                "Produced Excel-based visualisations for the engineering team",
                "Built networking skills with Cisco Packet Tracer",
                "Explored Flutter mobile development and business analysis frameworks"
            ],
            technologies: ["STLC", "SDLC", "Data Analysis", "Cisco Packet Tracer", "Flutter"]
        },
        {
            position: "Technology & Digital Banking Intern",
            company: "CIB Egypt",
            period: "2024",
            location: "Cairo, Egypt",
            description: "Gained exposure to digital transformation, data integrity, and cybersecurity fundamentals in a regulated banking environment.",
            responsibilities: [
                "Studied digital transformation and risk management in banking",
                "Learned data integrity and cybersecurity fundamentals",
                "Completed two bank-issued certifications"
            ],
            technologies: ["Digital Transformation", "Risk Management", "Data Integrity", "Cybersecurity"]
        },
        {
            position: "Summer Internship Programme",
            company: "Bright Network",
            period: "2024",
            location: "Remote",
            description: "Structured virtual programme developing professional and technical skills across technology career pathways.",
            responsibilities: [
                "Developed professional and technical skills",
                "Explored technology career pathways",
                "Completed structured industry challenges"
            ],
            technologies: ["Professional Skills", "Technology", "Career Development"]
        },
        {
            position: "Artificial Intelligence Training",
            company: "Zewail City of Science & Technology",
            period: "2023",
            location: "Cairo, Egypt",
            description: "Intensive AI programme covering machine learning, deep learning, and NLP, with hands-on delivered projects.",
            responsibilities: [
                "Studied machine learning, deep learning, and NLP",
                "Built sentiment analysis and image classification projects",
                "Developed a recommendation system using Python and TensorFlow"
            ],
            technologies: ["Python", "NumPy", "TensorFlow", "NLP", "Machine Learning"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Servio",
            category: "Full-Stack · AI",
            technologies: "React.js, Flutter, Node.js, MongoDB, Python, Scikit-Learn, XGBoost, NLP, JWT",
            image: "/images/project-cover-1.svg",
            link: "https://yousseftarekse.github.io/SERVIO-Showcase/",
            description: "Graduation project — a full-stack web and mobile marketplace connecting homeowners with verified service providers. Features an AI technician recommendation engine (KNN + NLP) and an XGBoost renovation cost estimator, secured with JWT authentication, role-based access control, and GDPR-aware privacy design."
        },
        {
            id: 2,
            title: "Book Store Web Application",
            category: "Full-Stack · E-Commerce",
            technologies: "HTML, CSS, JavaScript, PHP, Java J2EE",
            image: "/images/project-cover-2.svg",
            link: "",
            description: "A full-stack e-commerce platform with user authentication and a dynamic catalogue. Migrated the backend from PHP to Java J2EE and re-executed all functional test cases post-migration to confirm zero regression."
        },
        {
            id: 3,
            title: "Supermarket Management System",
            category: "Data · Dashboards",
            technologies: "R, Shiny, ggplot2, dplyr, QR Code",
            image: "/images/project-cover-3.svg",
            link: "",
            description: "A real-time management tool with receipt printing, QR-code inventory scanning, and statistical sales dashboards — nominated for Best Project by faculty."
        },
        {
            id: 4,
            title: "Arcade Center Database System",
            category: "Database",
            technologies: "Oracle SQL, PL/SQL",
            image: "/images/project-cover-4.svg",
            link: "",
            description: "A relational schema for games, customers, transactions, and staff, backed by tested PL/SQL stored procedures validating data accuracy and integrity across insert, update, and delete scenarios."
        },
        {
            id: 5,
            title: "DreamStage",
            category: "Full-Stack · AI",
            technologies: "Next.js, FastAPI, Supabase, Python, AI Audio Pipeline",
            image: "/images/project-cover-5.svg",
            link: "https://github.com/YoussefTarekSE/DreamStage",
            description: "An AI producer for people who've never touched a DAW — record a vocal in the browser and get a fully produced, mixed, and mastered song back. Vocal-following beat generation (tiered: neural / MusicGen / real-instrument synthesis), unlimited branchable Producer Cuts with taste learning, AI coaching, and automatic mastering to streaming loudness."
        }
    ],
    contact: {
        email: "youssef.tarek12004@gmail.com",
        github: "https://github.com/YoussefTarekSE",
        linkedin: "https://www.linkedin.com/in/yousseftarekse/",
        twitter: "", // optional — leave empty to hide
        facebook: "", // optional — leave empty to hide
        instagram: "https://www.instagram.com/yousseftvrek/"
    },
    skills: {
        develop: {
            title: "QA & TESTING",
            description: "Breaking things so users never have to",
            details: "Manual and automated test suites — functional, regression, and usability — with full defect-lifecycle ownership in Azure DevOps.",
            tools: ["Manual Testing", "Test Cases", "Cypress", "Selenium", "Postman", "Regression", "Azure DevOps", "Jira"]
        },
        design: {
            title: "FULL-STACK DEV",
            description: "Building reliable, full-stack applications",
            details: "Responsive web and mobile apps built end-to-end with React, Node.js, and Flutter — clean, tested, and ready to ship.",
            tools: ["React", "Node.js", "Express", "Flutter", "TypeScript", "JavaScript", "MongoDB", "MySQL"]
        }
    }
};
