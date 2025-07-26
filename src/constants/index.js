import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  gcm3,
  tsukiden,
  relovedCompany,
  vuejs,
  nuxtjs,
  mongoDB,
  nextjs,
  mysql,
  aws,
  mclaudTechnology,
  mclaudTechnologyCompany,
  reloved,
  talentSage
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
  { title: "HTML", icon: html },
  { title: "CSS", icon: css },
  { title: "JavaScript", icon: javascript },
  { title: "React JS", icon: reactjs },
  { title: "Vue JS", icon: vuejs },
  { title: "MongoDB", icon: mongoDB },
  { title: "MySQL", icon: mysql },
  { title: "Next JS", icon: nextjs },
  { title: "Nuxt JS", icon: nuxtjs },
  { title: "Amazon", icon: aws },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "git", icon: git },
  { title: "Vue JS", icon: vuejs },
  { title: "MongoDB", icon: mongoDB },
  { title: "MySQL", icon: mysql },
  { title: "Next JS", icon: nextjs },
  { title: "Nuxt JS", icon: nuxtjs },
  { title: "Amazon", icon: aws },
];

export const experiences = [
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
];

export const projects = [
  {
    name: "Mclaud Technology",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
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
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Vuetify", color: "pink-text-gradient" },
      { name: "VueJS", color: "pink-text-gradient" },
      { name: "MEVN", color: "pink-text-gradient" },
    ],
    image: talentSage,
    source_code_link: "https://www.talentsage.com/",
  },
  {
    name: "The Reloved Marketplace",
    description:
      "Reloved is the UAE’s first eco-tech platform where you can buy and sell secondhand fashion, furniture, luxury and baby & items.",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "AWS", color: "green-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" },
    ],
    image: reloved,
    source_code_link:
      "https://www.therelovedmarketplace.com/",
  },
];
