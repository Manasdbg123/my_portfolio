import emoji from "react-easy-emoji";

// 🧠 Splash Screen config (required to avoid import errors)
export const splashScreen = {
  enabled: false,
  animation: "none"
};

// 🖼️ Used in various components like Contact and Greeting
export const illustration = {
  animated: false
};

// 🎧 Placeholder to avoid podcast errors
export const podcastSection = {
  display: false
};

export const greeting = {
  username: "Kumar Kaustuk Raj",
  title: "Hi all, I'm Kaustuk",
  subTitle: emoji(
    "A passionate Full Stack and Java Backend Developer 🚀 with experience in building scalable web applications using Java, Spring Boot, RESTful APIs, and modern front-end technologies. Enthusiastic about solving complex DSA problems and continuously learning new tools and technologies."
  ),
  resumeLink: "https://drive.google.com/file/d/1qfvz96XiVsFjnskw6wKVLNx4TE4fGLUn/view?usp=drive_link",
  displayGreeting: true
};

export const socialMediaLinks = {
  github: "https://github.com/Manasdbg123",
  linkedin: "https://www.linkedin.com/in/kaustuk-raj-63a240226/",
  gmail: "kaustuk2003@gmail.com",
  facebook: "",
  medium: "",
  stackoverflow: "",
  twitter: "",
  instagram: "",
  gitlab: "",
  display: true
};

export const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK & BACKEND DEVELOPER WHO BUILDS SCALABLE WEB APPLICATIONS AND SOLVES COMPLEX PROBLEMS",
  skills: [
    emoji("⚡ Build RESTful APIs and scalable backend services using Java & Spring Boot"),
    emoji("⚡ Create dynamic and responsive web applications with JavaScript and React"),
    emoji("⚡ Design and manage relational databases using MySQL and PostgreSQL"),
    emoji("⚡ Implement user authentication and security using Spring Security and JWT"),
    emoji("⚡ Solve 2000+ DSA problems on platforms like Codeforces and LeetCode"),
    emoji("⚡ Familiar with CI/CD tools like Docker and Jenkins for deployment")
  ],
  softwareSkills: [
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "VS Code", fontAwesomeClassname: "fas fa-code" }
  ],
  display: true
};



export const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "National Institute of Technology, Andhra Pradesh",
      logo: require("./assets/images/nitapLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2021 - 2025",
      desc: "Pursuing B.Tech in CSE with strong interest in backend development and competitive programming.",
      descBullets: [
        "CGPA: 7.0/10",
        "Member of NIT AP Tech Fest Organization Team",
        "Member at Praayatnam NIT AP"
      ]
    }
  ]
};



export const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend Development (Java, Spring Boot, REST APIs)",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend Development (JavaScript, React, HTML/CSS)",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Structures & Algorithms (DSA)",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false
};

export const workExperiences = {
  display: false,
  experience: []
};

export const openSource = {
  showGithubProfile: "true",
  display: true
};
export const bigProjects = {
  title: "Big Projects",
  subtitle: "PERSONAL PROJECTS THAT SOLVE REAL-WORLD PROBLEMS",
  projects: [
    {
      image: require("./assets/images/ganLogo.png"),
      projectName: "Sketch to Face Transformation",
      projectDesc:
        "Used GANs and U-Net architecture to convert sketches into realistic faces. Improved image fidelity by 15% and reduced training time by 30%.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Manasdbg123/Sketch-to-Real-image-Transformation-using-Gan"
        }
      ]
    },
    {
      image: require("./assets/images/hospitalLogo.png"),
      projectName: "Hospital Management System",
      projectDesc:
        "Built with Spring Boot to manage patients, appointments, and staff. Secured with Spring Security and integrated RESTful APIs.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Manasdbg123/Hospital-Management-System"
        }
      ]
    },
    {
      image: require("./assets/images/recipeLogo.png"),
      projectName: "Recipe Blog",
      projectDesc:
        "A recipe-sharing platform with advanced search, admin panel, and 1,000+ users. Built using Node.js, Express, EJS, and MongoDB.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Manasdbg123/Recipe-Blog-main"
        }
      ]
    },
    {
      image: require("./assets/images/shoppingLogo.png"),
      projectName: "Shopping Cart Application",
      projectDesc:
        "Spring Boot application with product browsing, secure checkout, and order management. Used Hibernate & Spring Data JPA.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Manasdbg123/Shoping-cart"
        }
      ]
    }
  ],
  display: true
};


export const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle:
    "Here are some of my competitive programming and academic achievements.",
  achievementsCards: [
    {
      title: "Codeforces - Candidate Master",
      subtitle:
        "Achieved Candidate Master with a peak rating of 1913. Ranked 57th globally in Codeforces Round 1030 (Div. 2).",
      image: require("./assets/images/codeforces.png"),
      imageAlt: "Codeforces Logo",
      footerLink: [
        {
          name: "Codeforces Profile",
          url: "https://codeforces.com/profile/manasraj123"
        }
      ]
    },
    {
      title: "LeetCode - Guardian Rank",
      subtitle:
        "Rated Guardian with a peak rating of 2183. Ranked 11th globally in one of the LeetCode contests.",
      image: require("./assets/images/leetcode.png"),
      imageAlt: "LeetCode Logo",
      footerLink: [
        {
          name: "LeetCode Profile",
          url: "https://leetcode.com/u/manas-12345/"
        }
      ]
    }
  ],
  display: true
};

export const blogSection = {
  title: "Blogs",
  subtitle:
    "I enjoy sharing knowledge through writing, especially about backend development and competitive programming.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

export const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY KNOWLEDGE WHENEVER I GET A CHANCE"),
  talks: [],
  display: false
};

export const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

export const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to collaborate on a project, or just say hi? I'm always open to opportunities.",
  number: "+91 7061356710",
  email_address: "kaustuk2003@gmail.com"
};

export const twitterDetails = {
  userName: "",
  display: false
};

export const isHireable = true;
