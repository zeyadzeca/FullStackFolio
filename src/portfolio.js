/* Customize the configuration in this file to personalize your portfolio. */

// To change portfolio colors globally, edit src/_globalColor.scss.

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Replace with your own Lottie file name for a custom animation.

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const greeting = {
  username: "YourName",
  title: "Hi, I'm Your Name",
  subTitle: emoji(
    "A passionate full stack developer building web and mobile applications with JavaScript, React, Node.js, and related libraries and frameworks."
  ),
  resumeLink: "", // Add a public URL to your resume PDF, or leave empty to hide the resume button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
// Replace the placeholders with your own profiles. Leave a field empty to hide that icon.

const socialMediaLinks = {
  github: "https://github.com/YOUR_GITHUB_USERNAME",
  linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/",
  gmail: "hello@example.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  instagram: "",
  twitter: "",
  kaggle: "",
  display: true // Set true to display social media icons
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO ENJOYS EXPLORING NEW TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Build interactive front-end user interfaces for web and mobile applications"
    ),
    emoji(
      "⚡ Create progressive web applications with modern SPA architectures"
    ),
    emoji(
      "⚡ Integrate third-party services such as Firebase, AWS, and DigitalOcean"
    )
  ],

  /* Use the correct Font Awesome class name for each icon:
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
// Replace these sample schools with your own education history.

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Example University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Replace this sample description with your academic focus, research, or notable coursework.",
      descBullets: [
        "Sample highlight: research, teaching, or project work",
        "Sample highlight: relevant coursework or publications"
      ]
    },
    {
      schoolName: "Sample College",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Replace this sample description with your undergraduate experience.",
      descBullets: ["Sample highlight: clubs, internships, or academic awards"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set to true to show the proficiency section
  experience: [
    {
      Stack: "Frontend/Design", // Insert a stack or technology you have experience in
      progressPercentage: "90%" // Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};

// Work experience section
// Replace these sample roles with your own experience.

const workExperiences = {
  display: true, // Set to true to show the work experience section
  experience: [
    {
      role: "Software Engineer",
      company: "Example Corp",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Sample description: describe the product you worked on and the impact you had.",
      descBullets: [
        "Sample achievement: shipped a feature used by thousands of users",
        "Sample achievement: improved performance or reliability"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Sample Studio",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Sample description: share the technologies you used and the problems you solved."
    },
    {
      role: "Software Engineer Intern",
      company: "Demo Labs",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Sample description: summarize your internship responsibilities and outcomes."
    }
  ]
};

/* Open Source section: displays GitHub pinned repositories.
Configure GitHub integration using env.example (copy it to .env). */

const openSource = {
  showGithubProfile: "true", // Set true or false to show the GitHub profile card in Contact
  display: true // Set false to hide this section, defaults to true
};

// Featured projects
// Replace these sample projects with your own work.

const bigProjects = {
  title: "Big Projects",
  subtitle:
    "SAMPLE PRODUCTS AND APPLICATIONS YOU CAN REPLACE WITH YOUR OWN WORK",
  projects: [
    {
      image: require("./assets/images/facebookLogo.png"),
      projectName: "Analytics Dashboard",
      projectDesc:
        "Sample project: a web dashboard for visualizing product metrics and team activity.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://example.com"
        }
        // You can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/airbnbLogo.png"),
      projectName: "Community Platform",
      projectDesc:
        "Sample project: a collaborative platform for teams to share updates and resources.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://example.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, awards, and other milestones.
// Replace these sample cards with your own achievements.

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Sample achievements, certifications, and awards. Replace these cards with your own milestones.",

  achievementsCards: [
    {
      title: "Open Source Contributor",
      subtitle:
        "Sample achievement: contributed to community projects and completed a competitive coding program.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Open source program logo",
      footerLink: [
        {
          name: "Learn More",
          url: "https://developers.google.com/open-source"
        }
      ]
    },
    {
      title: "Voice Assistant Skill",
      subtitle:
        "Sample achievement: published a conversational action or skill for a digital assistant platform.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Assistant platform logo",
      footerLink: [
        {
          name: "View Sample",
          url: "https://developers.google.com/assistant"
        }
      ]
    },
    {
      title: "PWA Web App Developer",
      subtitle:
        "Sample certification: completed training in progressive web app development.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://web.dev/progressive-web-apps/"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Share articles that teach others what you have learned. Replace this sample post with your own writing.",
  displayMediumBlogs: "false", // Set to "true" and add MEDIUM_USERNAME in .env to fetch Medium posts
  blogs: [
    {
      url: "https://react.dev/",
      title: "Building modern user interfaces with React",
      description:
        "Sample blog card: replace this with a link to one of your articles."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("SHARE TALKS AND PRESENTATIONS YOU HAVE GIVEN"),

  talks: [
    {
      title: "Sample Talk Title",
      subtitle: "Conference or meetup name — replace with your event",
      slides_url: "https://example.com/slides",
      event_url: "https://example.com/event"
    }
  ],
  display: false // Set true after adding your talks
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "ADD EMBED LINKS FOR PODCAST EPISODES YOU HAVE APPEARED ON",

  // Provide your podcast embed URL
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false // Set true if you want a dedicated resume section in the navigation
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "", // Example: "+1-000-000-0000"
  email_address: "hello@example.com"
};

// Twitter Section

const twitterDetails = {
  userName: "YOUR_TWITTER_USERNAME", // Do not include the @ symbol
  display: false // Set true to show a Twitter timeline
};

const isHireable = false; // Set true if you are looking for a job. Shown as Open for opportunities on the GitHub profile card.

export {
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
