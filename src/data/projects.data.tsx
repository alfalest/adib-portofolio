import { DiBootstrap, DiCodeigniter } from "react-icons/di";
import { BiLogoJavascript, BiLogoPostgresql } from "react-icons/bi";
import { SiInertia } from "react-icons/si";
import { ReactNode } from "react";
import Scada from "@/assets/projects/Scada.png";
import JsfSupplyChain from "@/assets/projects/JsfSupplyChain.png";
import Sipdesa from "@/assets/projects/Sipdesa.png";
import Ssayomart from "@/assets/projects/Ssayomart.png";
import SsayomartCp from "@/assets/projects/SsayomartCp.png";
import Boga from "@/assets/projects/Boga.png";
import Alhijaz from "@/assets/projects/Alhijaz.png";
import Cryosmart from "@/assets/projects/Cryosmart.png";
import {
  SiCodeigniter,
  SiJquery,
  SiPhp,
  SiQuarkus,
  SiApachekafka,
  SiTailwindcss,
  SiJson
} from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaLaravel, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { RiEarthLine } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";

// Define the type for the tech stack icon
interface TechStackIcon {
  name?: string; // Optional tech name
  icon: ReactNode; // Icon can be any React component or JSX
}

// Define the type for the project
interface Project {
  title: string;
  description: string;
  img: string;
  techStack: TechStackIcon[];
  portfolioUrl?: string;
  githubUrl?: string;
}

// Define tech stack for each project
const techStack1: TechStackIcon[] = [
  {
    name: "GIS",
    icon: <RiEarthLine className="dark:text-white text-dark" />,
  },
  {
    name: "Javascript",
    icon: <BiLogoJavascript className="text-yellow-600" />,
  },
  {
    name: "Java",
    icon: <FaJava className="text-blue-600" />,
  },
  { name: "Quarkus", icon: <SiQuarkus className="text-blue-600" /> },
  {
    name: "NodeJS",
    icon: <FaNodeJs className="text-green-600" />,
  },
  { name: "ReactJS", icon: <FaReact className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Kafka", icon: <SiApachekafka className="dark:text-white text-dark" /> },
  { name: "PostGreSQL", icon: <BiLogoPostgresql className="text-blue-700" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-sky-500" /> },
];

const techStack2: TechStackIcon[] = [
  { name: "Laravel", icon: <FaLaravel className="text-red-600" /> },
  { name: "PHP", icon: <SiPhp className="text-indigo-500" /> },
  { name: "IntertiaJS", icon: <SiInertia className="text-violet-700" /> },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript className="text-yellow-600" />,
  },
  { name: "ReactJS", icon: <FaReact className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <DiBootstrap className="text-purple-500" /> },
  { name: "PostGreSQL", icon: <BiLogoPostgresql className="text-blue-700" /> },
];

const techStack3: TechStackIcon[] = [
  { name: "CodeIgniter", icon: <DiCodeigniter className="text-red-600" /> },
  { name: "PHP", icon: <SiPhp className="text-indigo-500" /> },
  { name: "jQuery", icon: <SiJquery className="text-blue-500" /> },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript className="text-yellow-600" />,
  },
  { name: "Bootstrap", icon: <DiBootstrap className="text-purple-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-sky-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "MySQL", icon: <GrMysql className="text-blue-700" /> },
];

const techStack4: TechStackIcon[] = [
  { name: "CodeIgniter", icon: <SiCodeigniter className="text-red-600" /> },
  { name: "PHP", icon: <SiPhp className="text-indigo-500" /> },
  { name: "jQuery", icon: <SiJquery className="text-blue-500" /> },
  { name: "Bootstrap", icon: <DiBootstrap className="text-purple-500" /> },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript className="text-yellow-600" />,
  },
  { name: "CSS", icon: <FaCss3Alt className="text-sky-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "MySQL", icon: <GrMysql className="text-blue-700" /> },

];

const techStack5: TechStackIcon[] = [
  { name: "CodeIgniter", icon: <SiCodeigniter className="text-red-600" /> },
  { name: "PHP", icon: <SiPhp className="text-indigo-500" /> },
  { name: "jQuery", icon: <SiJquery className="text-blue-500" /> },
  { name: "Bootstrap", icon: <DiBootstrap className="text-purple-500" /> },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript className="text-yellow-600" />,
  },
  { name: "CSS", icon: <FaCss3Alt className="text-sky-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
];

const techStack6: TechStackIcon[] = [
  { name: "Bootstrap", icon: <DiBootstrap className="text-purple-500" /> },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript className="text-yellow-600" />,
  },
  { name: "CSS", icon: <FaCss3Alt className="text-sky-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
];

const techStack7: TechStackIcon[] = [
  { name: "Bootstrap", icon: <DiBootstrap className="text-purple-500" /> },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript className="text-yellow-600" />,
  },
  { name: "CSS", icon: <FaCss3Alt className="text-sky-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
];

const techStack8: TechStackIcon[] = [
  { name: "Laravel", icon: <FaLaravel className="text-red-600" /> },
  { name: "PHP", icon: <SiPhp className="text-indigo-500" /> },
  { name: "JSON", icon: <SiJson className="text-black" /> },
  { name: "jQuery", icon: <SiJquery className="text-blue-500" /> },
  { name: "MySQL", icon: <GrMysql className="text-blue-700" /> },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript className="text-yellow-600" />,
  },
  { name: "Bootstrap", icon: <DiBootstrap className="text-purple-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-sky-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
];

// Array of projects
export const projects: Project[] = [
  {
    title: "Grita SCADA PLN Icon+",
    description:
      "A real-time monitoring and control application for PLN Supervisory Control and Data Acquisition (SCADA) network, ensuring efficient and reliable electricity distribution to substations. The system enables centralized supervision, rapid response to disruptions, power optimization, and preventive maintenance.",
    img: Scada,
    techStack: techStack1,
    portfolioUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7287086785950633984/",
  },

  {
    title: "Cryosmart Cryogenic Tank Monitoring",
    description:
      "The Cryosmart Project is designed to monitor our clients' ISO tanks using specialized IoT technology developed exclusively for them. The system works by configuring the IoT address upon ISO tank installation, taking into account key parameters such as tank volume, liquid usage, tank density, and tank height.",
    img: Cryosmart,
    techStack: techStack8,
    portfolioUrl: "https://cryosmart.id/login",
    githubUrl:
      "#",
  },

  {
    title: "JSF Supply Chain Management",
    description:
      "Developed an application for stock management, supplier and customer databases, production recipe planning, weighing, waste calculation, and ERP integration. Responsibilities included flowcharts, database design, ERD, API creation, and core features like Weighing, Invoices, and Delivery Notes. I also lead this project as Technical Lead",
    img: JsfSupplyChain,
    techStack: techStack2,
    portfolioUrl: "https://jsf-supplychain.cloud",
    githubUrl:
      "https://github.com/alfalest/javasuperfood-supply-chain",
  },
  {
    title: "Ssayomart E-Commerce",
    description:
      "An e-commerce application for purchasing foodstuffs, snacks, drinks and Korean sauces without a third party as a seller.This web- based e - commerce application was created using the Codeigniter 4 framework and the PHP programming language.",
    img: Ssayomart,
    techStack: techStack3,
    portfolioUrl: "https://ssayomart.com/",
    githubUrl: "https://github.com/alfalest/ssayomart",
  },
  {
    title: "Sipdesa App",
    description:
      "An community service application that is very useful to facilitate the process of administrative services in the village in digital form",
    img: Sipdesa,
    techStack: techStack4,
    portfolioUrl: "https://drive.google.com/file/d/1sNmpmpW1pcSkqMDV_yBiKQuP-pq27J7h/view?usp=drive_link",
    githubUrl:
      "https://github.com/alfalest/system-village-integration",
  },
  {
    title: "Ssayomart Company Profile",
    description:
      "Ssayomart is an e-commerce project. I worked on an existing project, focusing on improving its responsiveness, particularly ensuring a seamless mobile experience for users. If you're viewing it on a large screen and want to switch to mobile view, please refresh the browser for a better experience.",
    img: SsayomartCp,
    techStack: techStack5,
    portfolioUrl: "https://ssayomart.com",
    githubUrl:
      "https://github.com/alfalest/ssayomart-company-profile",
  },
  {
    title: "Boga Eterna Company Profile",
    description:
      "An company profile for PT Boga Eterna Sentosa",
    img: Boga,
    techStack: techStack6,
    portfolioUrl: "#",
    githubUrl:
      "https://github.com/alfalest/boga-eterna-sentosa",
  },
  {
    title: "Al-Hijaz Company Profile",
    description:
      "An company profile for Al Hijaz umroh & hajj consultant",
    img: Alhijaz,
    techStack: techStack7,
    portfolioUrl: "https://daftarumrohberkah.com",
    githubUrl:
      "https://github.com/alfalest/alhijaz-company-profile",
  },
  // Add more projects as needed
];
