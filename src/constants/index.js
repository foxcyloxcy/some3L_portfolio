import {
  javascript,
  html,
  css,
  git,
  gcm3,
  tsukiden,
  relovedCompany,
  aws,
  mclaudTechnology,
  mclaudTechnologyCompany,
  reloved,
  talentSage,
  callRecordings,
  toDo,
  webDevelopment,
  appDevelopment,
  webMaintenance,
  softwareTesting
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Web Development", icon: webDevelopment },
  { title: "App Development", icon: appDevelopment },
  { title: "Web Maintenance", icon: webMaintenance },
  { title: "Software Testing", icon: softwareTesting },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "git", icon: git },
  { name: "Amazon", icon: aws },
];

export const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Reloved UAE",
    icon: relovedCompany,
    iconBg: "#B2B2AF",
    date: "July 2024 - Present",
    points: [
      "Leading team management activities, ensuring timely coordination, task allocation, and weekly delivery of project outputs to clients.",
      "Developing and maintaining e-commerce web applications using React.js, PHP (Laravel), and MySQL.",
      "Utilizing AWS services, including Lightsail and Amplify, for scalable deployment and hosting.",
      "Implementing DevOps practices and managing CI/CD pipelines aligned with client-defined timelines, budgets, and feature requirements."
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "GCM3 Inc.",
    icon: gcm3,
    iconBg: "#B2B2AF",
    date: "Apr 2022 - May 2024",
    points: [
      "Engaged in full-stack development using the MEVN (MySQL, Express, Vue.js, Node.js) stack, successfully delivering end-to-end solutions from initial design and development through to deployment.",
      "Gained experience in building projects from scratch to deployment, including developing features such as playing call recordings using symlinks, creating a contact center application integrated with Genesys Cloud, and building online survey tools.",
    ],
  },
  {
    title: "Design Engineer",
    company_name: "Tsukiden Global Solutions Inc.",
    icon: tsukiden,
    iconBg: "#B2B2AF",
    date: "Sep 2021 - Apr 2022",
    points: [
      "Acquired hands-on knowledge of Zendesk, Zendesk API, Zendesk sunshine, React.js and agile methodology.",
      "Gain a solid foundation in client interactions, including understanding client needs, managing expectations, providing tailored solutions, and maintaining strong client relationships.",
    ],
  },
  {
    title: "Shopify Developer",
    company_name: " Mclaud Technology",
    icon: mclaudTechnologyCompany,
    iconBg: "#B2B2AF",
    date: "Jun 2021 - Sep 2021",
    points: [
      "Maintained responsive product and content pages to align with client branding.",
      "Customized Shopify themes using Liquid, HTML/CSS, and JavaScript.",
    ],
  },
];

export const projects = [
  {
    name: "Mclaud Technology",
    description:
      "DTF printing company. Regularly innovate printing equipment technology. Owns one of the most outstanding brand. Monitoring websites inventory availability for printers, ink and papers.",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Liquid", color: "pink-text-gradient" },
      { name: "Shopify", color: "pink-text-gradient" },
    ],
    image: mclaudTechnology,
    source_code_link: "https://mclaud.technology/",
  },
  {
    name: "TalentSage",
    description:
      "A company based in UK that specializes in personality test surveys and reports. Built this complex web application from scratch, it allows users to have multiple roles, multiple organizations, create and manage surveys(sample surveys are: Big 5 Personality Test and 360 Personality Test ) and reports for the respective surveys.",
    tags: [
      { name: "Client-facing", color: "pink-text-gradient" },
      { name: "Vuetify", color: "pink-text-gradient" },
      { name: "MEVN", color: "pink-text-gradient" },
    ],
    image: talentSage,
    source_code_link: "https://www.talentsage.com/",
  },
  {
    name: "The Reloved Marketplace",
    description:
      "Reloved is the UAE’s first eco-tech platform where you can buy and sell secondhand fashion, furniture, luxury and baby & items. Built from scratch, mobile responsive e-commerce Web-app.",
    tags: [
      { name: "Client-facing", color: "pink-text-gradient" },
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "DevOps", color: "blue-text-gradient" },
      { name: "MUI", color: "pink-text-gradient" },
    ],
    image: reloved,
    source_code_link:
      "https://www.therelovedmarketplace.com/",
  },
  {
    name: "Play Audio Recording",
    description:
      "This application can search records in database using multiple input filters then displays table and can play audio recordings using symlinks and also showcases CRUD functionality in User Management component.",
    tags: [
      { name: "CRUD", color: "pink-text-gradient" },
      { name: "MEVN", color: "blue-text-gradient" },
      { name: "DevOps", color: "blue-text-gradient" },
      { name: "Vuetify", color: "pink-text-gradient" },
    ],
    image: callRecordings,
    source_code_link:
      "https://foxcyloxcy.github.io/audio-recording/",
  },
  {
    name: "To-Do list",
    description:
      "This to-do list is for you to list action items you will actually do. You can cross out the action item after you are done, or you can delete it if you don't need it in your list anymore.",
    tags: [
      { name: "HTML", color: "pink-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "Animation", color: "pink-text-gradient" },
    ],
    image: toDo,
    source_code_link:
      "https://foxcyloxcy.github.io/Sticky-Notes/",
  },
];
