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
  weatherpedia,
  termpw,
  payloadmaster,
  mhft,
  sketcher,
  CompileVortex,
  gcm3,
  tsukiden,
  reloved,
  vuejs,
  nuxtjs,
  mongoDB,
  nextjs,
  mysql,
  aws
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
    icon: reloved,
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
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
