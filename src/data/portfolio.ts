import { PortfolioData } from "@/types";
import { projectsData } from "./projects";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Md Shahadat Hossain Khan",
    headline: "CSE engineer and Full Stack  Web developer",
    roles: [
      "Full Stack Web Developer",
      "Computer Science Engineer",
      "MERN & Next.js Specialist",
      "API & Database Architect",
    ],
    bio: "Passionate CS Engineer specializing in high-performance web applications with Next.js, React, Node.js, and MongoDB. Focused on clean code, responsive design, and scalable architecture. Actively seeking software engineering & web development internships.",
    aboutLong: [
      "I am a Computer Science Engineering student and an enthusiastic Full Stack Web Developer. My journey centers on turning complex problems into intuitive, high-performance web products that users love.",
      "With a strong core foundation in Data Structures, Algorithms, and Software Engineering, I build across the entire stack — from pixel-perfect, accessible UIs in React & Next.js to robust, secure REST APIs in Express/Node.js backed by MongoDB.",
      "I thrive in collaborative environments, love participating in hackathons, and constantly explore modern architectural patterns. When I am not writing code, I analyze system design, optimize database queries, or experiment with playful micro-interactions.",
    ],
    email: "shahadathkx@gmail.com",
    location: "Dhaka, Bangladesh",
    status: {
      available: true,
      text: "Actively seeking Full Stack & Software Engineering Internships",
    },
    socials: {
      github: "https://github.com/shahadathkx",
      linkedin: "https://linkedin.com/in/shahadathkx",
      facebook: "https://www.facebook.com/shahadat.h.khan.138295",
      phone: "+8801724518368",
      whatsapp: "https://wa.me/8801724518368",
      email: "mailto:shahadathkx@gmail.com",
    },
    resumeUrl: "/resume.pdf",
    stats: [
      {
        label: "Projects Completed",
        value: "15+",
        subtext: "Full-stack & frontend web apps",
      },
      {
        label: "Core Technologies",
        value: "10+",
        subtext: "Next.js, Node, React, Mongo, TS",
      },
      {
        label: "Clean Code",
        value: "100%",
        subtext: "Component modularity & testability",
      },
      {
        label: "Problem Solving",
        value: "250+",
        subtext: "Coding challenges & algorithms",
      },
    ],
  },
  skills: [
    {
      title: "Frontend",
      description: "Crafting fluid, accessible, and responsive user interfaces",
      icon: "Layout",
      skills: [
        { name: "React.js", level: "Proficient" },
        { name: "Next.js (App Router)", level: "Proficient" },
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Proficient" },
        { name: "Tailwind CSS", level: "Proficient" },
        { name: "HTML5 & Semantic Web", level: "Proficient" },
        { name: "CSS3 & Modern Animations", level: "Proficient" },
        { name: "Redux Toolkit / Zustand", level: "Advanced" },
      ],
    },
    {
      title: "Backend",
      description: "Developing scalable servers, APIs, and robust databases",
      icon: "Server",
      skills: [
        { name: "Node.js", level: "Proficient" },
        { name: "Express.js", level: "Proficient" },
        { name: "MongoDB & Mongoose", level: "Proficient" },
        { name: "RESTful API Design", level: "Proficient" },
        { name: "PostgreSQL / SQL Basics", level: "Intermediate" },
        { name: "JWT & OAuth Authentication", level: "Advanced" },
        { name: "Redis Caching", level: "Intermediate" },
        { name: "Server-Side Rendering (SSR)", level: "Proficient" },
      ],
    },
    {
      title: "Tools",
      description: "Engineering practices, cloud deployment, and CS tooling",
      icon: "Terminal",
      skills: [
        { name: "Git & GitHub", level: "Proficient" },
        { name: "Postman API Testing", level: "Proficient" },
        { name: "Docker Basics", level: "Intermediate" },
        { name: "VS Code & Debugging", level: "Proficient" },
        { name: "Vercel & Render Deployment", level: "Proficient" },
        { name: "Linux & Bash / Terminal", level: "Proficient" },
        { name: "Data Structures & Algorithms", level: "Advanced" },
        { name: "Jest / Automated Testing", level: "Intermediate" },
      ],
    },
  ],
  projects: projectsData,
  experiences: [
    {
      id: "edu-cse",
      role: "B.Sc. in Computer Science and Engineering",
      organization: "University Academic Program",
      period: "2022 — Present",
      location: "Bangladesh",
      type: "Education",
      description:
        "Pursuing undergraduate degree in Computer Science and Engineering. Focusing on Data Structures, Database Systems, Computer Networks, and Software Engineering methodologies.",
      highlights: [
        "Dean's Honor List / High Academic Standing in core computing courses",
        "Active member of the University Competitive Programming and Web Development clubs",
        "Led multiple team project capstones developing practical web software",
      ],
      badges: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "OOP"],
    },
    {
      id: "hackathon-lead",
      role: "Lead Full Stack Developer & Hackathon Finalist",
      organization: "National University Tech Hackathon",
      period: "2024",
      location: "Dhaka",
      type: "Leadership & Hackathon",
      description:
        "Led a team of 4 engineers to design and prototype a smart civic reporting web app within 36 hours. Delivered a live Next.js + MongoDB MVP with geolocated issue reporting.",
      highlights: [
        "Architected frontend and backend synchronization under tight deadlines",
        "Pitched live demo to industry jury, ranking in Top 5 finalist teams",
        "Received accolades for clean UI and rapid full-stack delivery",
      ],
      badges: ["Next.js", "MongoDB", "Team Leadership", "Rapid Prototyping"],
    },
    {
      id: "freelance-web",
      role: "Independent Full Stack Web Developer",
      organization: "Freelance & Client Projects",
      period: "2023 — Present",
      location: "Remote",
      type: "Experience",
      description:
        "Building custom responsive web applications, landing pages, and administrative portals for local businesses and early-stage projects.",
      highlights: [
        "Delivered responsive, SEO-optimized web applications with 95+ Google Lighthouse scores",
        "Integrated custom payment gateways, form handlers, and content management interfaces",
        "Collaborated directly with clients to translate business requirements into technical specs",
      ],
      badges: ["React.js", "Node.js", "Tailwind CSS", "Client Delivery"],
    },
  ],
};
