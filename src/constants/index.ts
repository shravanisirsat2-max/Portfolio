import type {
  NavLink,
  Skill,
  Experience,
  Project,
  Achievement,
  Certificate,
  Education,
  Activity,
  Stat,
} from "@/types";

export const personalInfo = {
  name: "Shravani Sirsat",
  role: "Computer Science Engineer",
  tagline: "Pre-Final Year | CGPA 10 | 2nd University Rank",
  email: "sms.shravani@gmail.com",
  phone: "+91 9373502080",
  location: "Solapur, Maharashtra, India",
  github: "https://github.com/shravanitech-crypto",
  linkedin: "https://linkedin.com/in/shravani-sirsat-80a80b290",
  leetcode: "https://leetcode.com/u/shravani_sirsat/",
  resumeUrl: "/resume.pdf",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certificates", href: "#certificates" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const typingTexts = [
  "Software Engineer",
  "Full Stack Developer",
  "UI Designer",
  "Problem Solver",
  "Creative Thinker",
  "Leader",
];

export const stats: Stat[] = [
  { value: "10", label: "CGPA" },
  { value: "2nd", label: "University Rank" },
  { value: "100+", label: "Students Led" },
  { value: "3", label: "Major Projects" },
];

export const skills: Skill[] = [
  { name: "Java", icon: "", category: "Languages" },
  { name: "Python", icon: "SiPython", category: "Languages" },
  { name: "PHP", icon: "SiPhp", category: "Languages" },
  { name: "JavaScript", icon: "SiJavascript", category: "Languages" },
  { name: "DSA", icon: "", category: "Languages" },
  { name: "HTML", icon: "SiHtml5", category: "Frontend" },
  { name: "CSS", icon: "SiCss", category: "Frontend" },
  { name: "React", icon: "SiReact", category: "Frontend" },
  { name: "ASP.NET", icon: "SiDotnet", category: "Backend" },
  { name: "PHP", icon: "SiPhp", category: "Backend" },
  { name: "Python", icon: "SiPython", category: "Backend" },
  { name: "MySQL", icon: "SiMysql", category: "Database" },
  { name: "MongoDB", icon: "SiMongodb", category: "Database" },
  { name: "Git", icon: "SiGit", category: "Tools" },
];

export const experiences: Experience[] = [
  {
    company: "SGI Technology",
    role: "Web Development Intern",
    period: "July 2022 - August 2022",
    description:
      "Worked on web development projects with a focus on responsive design and healthcare solutions.",
    achievements: [
      "Implemented responsive web interfaces using ASP.NET, improving layout adaptability, usability, and overall user experience",
      "Designed and developed a Hospital Management Website in a team environment",
    ],
  },
  {
    company: "Computer Science Department",
    role: "President, Student Association",
    period: "Aug 2025 - May 2026",
    description:
      "Led department-level activities by coordinating 100+ students across multiple events, ensuring timely planning, communication, and successful execution.",
    achievements: [
      "Led department-level activities by coordinating 100+ students across multiple events",
      "Represented students in academic and cultural matters",
      "Coordinated events, meetings, and initiatives",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "EcoFuelConnect",
    description: "A web application to locate CNG stations using PHP, MySQL, HTML, and CSS.",
    longDescription:
      "EcoFuelConnect is a web application designed to help users locate CNG (Compressed Natural Gas) stations easily. Built with PHP and MySQL, it provides a seamless way to find nearby fueling stations.",
    techStack: ["PHP", "MySQL", "HTML", "CSS"],
    features: [
      "Locate nearby CNG stations",
      "Station details and availability",
      "User-friendly interface",
      "Search and filter functionality",
    ],
    challenges:
      "Integrating accurate location data with a simple, efficient user interface.",
    solution:
      "Used PHP with MySQL for efficient data handling and a clean HTML/CSS frontend for usability.",
    impact:
      "Provides an accessible platform for users to find CNG stations quickly and efficiently.",
    github: "https://github.com/shravanitech-crypto",
    live: "#",
    image: "/projects/eco-fuel-connect.jpg",
  },
  {
    title: "Hospital Management System",
    description: "A hospital management application built with ASP.NET featuring patient records and appointment handling.",
    longDescription:
      "A comprehensive Hospital Management System built using ASP.NET to manage patient records, appointments, and other healthcare operations efficiently.",
    techStack: ["ASP.NET", "HTML", "CSS", "JavaScript"],
    features: [
      "Patient record management",
      "Appointment scheduling system",
      "User-friendly interface for hospital staff",
    ],
    challenges:
      "Building a reliable system for managing sensitive patient data and appointments.",
    solution:
      "Leveraged ASP.NET for a robust backend with a clean frontend interface.",
    impact:
      "Streamlined hospital operations with efficient patient data and appointment management.",
    github: "https://github.com/shravanitech-crypto",
    live: "#",
    image: "/projects/hospital-management.jpg",
  },
  {
    title: "Placement Preparation Guide",
    description: "An AI-powered Placement Preparation Web Application using Java and MongoDB.",
    longDescription:
      "An AI-powered Placement Preparation Web Application designed to help students prepare for campus placements. Features personalized learning paths, aptitude practice, coding question recommendations, and user progress tracking.",
    techStack: ["Java", "MongoDB", "HTML", "CSS", "JavaScript"],
    features: [
      "Personalized learning paths",
      "Aptitude practice tests",
      "Coding question recommendations",
      "User progress tracking",
    ],
    challenges:
      "Implementing AI-powered personalized recommendations for effective placement preparation.",
    solution:
      "Used Java for backend logic with MongoDB for flexible data storage.",
    impact:
      "Helps students prepare effectively for placements with personalized learning and progress tracking.",
    github: "https://github.com/shravanitech-crypto",
    live: "#",
    image: "/projects/placement-prep.jpg",
  },
];

export const achievements: Achievement[] = [
  {
    title: "2nd Position - MIT Project Competition",
    description: "Achieved 2nd Position in the Project Competition at MITADT University.",
    icon: "Trophy",
  },
  {
    title: "Winner - Technosinh2K26",
    description: "Secured a winning position in the Project Competition at Technosinh2K26.",
    icon: "Medal",
  },
  {
    title: "2nd Rank - 3rd Semester",
    description: "Secured 2nd Rank in Engineering (3rd Semester).",
    icon: "Award",
  },
  {
    title: "2nd Rank - 4th Semester",
    description: "Secured 2nd Rank in Engineering (4th Semester).",
    icon: "Award",
  },
  {
    title: "2nd Rank - 5th Semester",
    description: "Secured 2nd Rank in Engineering (5th Semester).",
    icon: "Award",
  },
];

export const certificates: Certificate[] = [
  {
    title: "UX and Web Design Master Course",
    issuer: "Udemy",
    date: "Jan 2025",
    credentialUrl: "#",
  },
  {
    title: "Complete Web and Mobile Design: UI/UX, Figma, and More",
    issuer: "Udemy",
    date: "Dec 2025",
    credentialUrl: "#",
  },
  {
    title: "The Branding Masterclass",
    issuer: "Udemy",
    date: "Dec 2025",
    credentialUrl: "#",
  },
];

export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science",
    institution: "N.B. Navale Sinhagad College of Engineering, Kegaon, Solapur",
    score: "SGPA: 10",
    period: "2024 - Present",
    description:
      "Currently pursuing Bachelor of Technology with a perfect SGPA of 10.",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "MSBTE",
    score: "85.89%",
    period: "2021 - 2024",
    description:
      "Completed diploma with distinction, building a strong foundation in engineering principles.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "S.R. Girls Sevasadhan High School, Solapur",
    score: "87%",
    period: "2021",
    description: "Completed secondary education with excellent academic standing.",
  },
];

export const activities: Activity[] = [
  {
    title: "Event Management",
    description: "Organized and managed multiple department-level events coordinating 100+ students.",
    icon: "",
  },
  {
    title: "Travelling",
    description: "Passionate about exploring new places and experiencing diverse cultures.",
    icon: "",
  },
  {
    title: "Photography",
    description: "Enjoy capturing moments and creative visual storytelling through photography.",
    icon: "",
  },
  {
    title: "Dance",
    description: "Active participant in dance events and cultural activities.",
    icon: "",
  },
];
