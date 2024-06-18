/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ammasaya's Portfolio",
  description:
    "Dynamic Executive Assistant with a passion for precision and excellence. Skilled in managing complex schedules, streamlining operations, and driving project success. Bringing unparalleled organizational skills and a proactive mindset to support top-level executives.",
  og: {
    title: "Ammasaya's Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Ammasaya Grahams",
  logo_name: "Ammasaya Grahams",
  nickname: "Amma-Say-uh",
  subTitle:
    "As an Executive Assistant, I provide comprehensive support to ensure the smooth and efficient operation of executive offices. My role involves a range of responsibilities that are crucial to the success of senior executives and the organization as a whole. Here’s a closer look at what I do.",
  resumeLink:
    "https://docs.google.com/presentation/d/1SOPIX8m_9MZqUyiKuuSFqxTcNblzQAvD1OgnAnggBQk/edit?usp=sharing",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "sayacgrahams@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:sayacgrahams@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Executive Support",
      fileName: "DataScienceImg",
      skills: [
        "I manage complex schedules, coordinate meetings, and organize travel arrangements to ensure executives can focus on strategic initiatives. By anticipating needs and preparing materials in advance, I enable executives to operate at their highest level of productivity."
      ],
      softwareSkills: [
        {
          skillName: "Google Calendar",
          fontAwesomeClassname: "logos:google-calendar",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Outlook",
          fontAwesomeClassname: "vscode-icons:file-type-outlook",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Microsoft Teams",
          fontAwesomeClassname: "logos:microsoft-teams",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Zoom",
          fontAwesomeClassname: "cib:zoom",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "WebEx",
          fontAwesomeClassname: "simple-icons:webex",
          style: {
            color: "#61DAFB",
          },
        },
        {skillName: "Expensify",
          fontAwesomeClassname: "simple-icons:expensify",
          style:  {
          color: "#128c41"
          }
        }
        
      ],
    },
    {
      title: "Project Management",
      fileName: "FullStackImg",
      skills: [
        "I oversee the planning and execution of various projects, ensuring they are completed on time and within budget. This includes coordinating resources, managing timelines, and communicating progress to stakeholders.",
      ],
      softwareSkills: [
        {
          skillName: "Microsoft Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel2",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Microsoft Project",
          fontAwesomeClassname: "file-icons:microsoft-project",
          style: {
            color: "#128c41",
          },
        },
        {
          skillName: "Notion",
          fontAwesomeClassname: "devicon:notion",
          style: {
            color: "#fff",
          },
        },
        {
          skillName: "Monday.com",
          fontAwesomeClassname: "logos:monday-icon",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Administrative Excellence",
      fileName: "CloudInfraImg",
      skills: [
        "From drafting correspondence to preparing reports and presentations, I handle a wide array of administrative tasks with precision and attention to detail. My goal is to streamline processes and enhance office efficiency while Handling sensitive information with the utmost confidentiality and discretion.",
      ],
      softwareSkills: [
        {
          skillName: "Microsoft Word",
          fontAwesomeClassname: "vscode-icons:file-type-word",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Microsoft Powerpoint",
          fontAwesomeClassname: "vscode-icons:file-type-powerpoint",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Microsoft Power BI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
            color: "#c60c15",
          },
        },
        {
          skillName: "Google Docs",
          fontAwesomeClassname: "simple-icons:googledocs",
          style: {
            color: "#4285f4",
          },
        },
        {
          skillName: "Adobe Acrobat",
          fontAwesomeClassname: "file-icons:adobe-acrobat",
          style: {
            color: "#c60c15",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau-icon",
          style: {
            color: "#336791",
          },
        },
      ],
    },
    {
      title: "Problem-Solving",
      fileName: "DesignImg",
      skills: [
        "In fast-paced environments, challenges are inevitable. I excel at identifying issues, developing creative solutions, and implementing effective strategies to resolve problems quickly and efficiently.",
      ],
      softwareSkills: [
        {
          skillName: "Critical thinking",
          fontAwesomeClassname: "noto:brain",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Communication",
          fontAwesomeClassname: "streamline-emojis:speaking-head",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Time management",
          fontAwesomeClassname: "emojione:stopwatch",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Attention to detail",
          fontAwesomeClassname: "noto:magnifying-glass-tilted-left",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
//come back to the heading and bottom certificates
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Skillshare",
      iconifyClassname: "simple-icons:skillshare",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    },
    {
      siteName: "Udemy",
      iconifyClassname: "logos:udemy-icon",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "keiser University",
      subtitle: "Associate of Arts (A.A.) in General Studies",
      logo_path: "keiser80.svg",
      alt_name: "keiser University",
      duration: "Graduated June 2024",
      descriptions: [
        "Completed an Associate of Arts degree with a focus on Business Administration, providing a strong foundation in organizational and management principles.",
        "Graduated with honors, recognized for academic excellence and leadership.",
      ],
      website_link: "https://www.keiseruniversity.edu/pembroke-pines/,"
    },
    {
      title: "Miami Dade College",
      subtitle: "Bachelor of Science (B.Sc.) in Biomedical Sciences",
      logo_path: "mdc80.svg",
      alt_name: "Miami Dade College",
      duration: "Expected Graduation: May 2026",
      descriptions: [
        "Pursuing a Bachelor of Science (B.Sc.) degree with a focus on Biomedical Sciences.",
        "Engaged in various extracurricular activities and professional development programs.",

      ],
      website_link: "https://www.mdc.edu/",
    },
  ],
};

const certifications = {
  certifications: [
   
   
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "With a solid foundation in Business Administration and a focus on Biomedical Sciences, I have gained diverse experience in both organizational management and scientific fields. My professional journey includes roles that honed my skills in project coordination, administrative support, and data analysis. I am committed to contributing to both business operations and scientific advancements with a keen eye for detail and a passion for continuous learning",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
        {
          title: "Administrative Assistant",
          company: "Realz Plumbing,",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "2023 - Present",
          location: "Remote",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "avicon.svg",
    description:
      "I try to answer all emails within 24 hours. Whether you have questions, need assistance, or just want to connect, feel free to reach out!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document my experiences and share personal stories along with technical knowledge. I also write about medical topics and delve into the fascinating world of quantum physics.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "North Miami Beach, FL 33179",
    locality: "North Miami beach",
    country: "USA",
    region: "Florida",
    postalCode: "33179",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/North+Miami+Beach,+FL+33179/@25.7730659,-80.3421381,10z/data=!4m6!3m5!1s0x88d9ac25a9794d45:0x4aa5b36f3f778a2!8m2!3d25.9502474!4d-80.1930859!16s%2Fm%2F03dp4cw?entry=ttu",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
