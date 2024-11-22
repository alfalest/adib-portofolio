import { DiBootstrap, DiCodeigniter } from "react-icons/di";
import { BiLogoJavascript, BiLogoPostgresql } from "react-icons/bi";
import { SiInertia } from "react-icons/si";
import { ReactNode } from "react";
import JsfSupplyChain from "@/assets/projects/JsfSupplyChain.png";
import Sipdesa from "@/assets/projects/Sipdesa.png";
import Ssayomart from "@/assets/projects/Ssayomart.png";
import SsayomartCp from "@/assets/projects/SsayomartCp.png";
import Boga from "@/assets/projects/Boga.png";
import {
  SiCodeigniter,
  SiJquery,
  SiPhp,
} from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaLaravel, FaReact } from "react-icons/fa";

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
  { name: "Laravel", icon: <FaLaravel className="text-red-600" /> },
  { name: "IntertiaJS", icon: <SiInertia className="text-violet-700" /> },
  { name: "ReactJS", icon: <FaReact className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <DiBootstrap className="text-purple-500" /> },
  { name: "PostGreSQL", icon: <BiLogoPostgresql className="text-blue-700" /> },
];

const techStack2: TechStackIcon[] = [
  { name: "Bootstrap", icon: <DiBootstrap className="text-purple-500" /> },
  { name: "CodeIgniter", icon: <DiCodeigniter className="text-red-600" /> },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript className="text-yellow-600" />,
  },
];

const techStack3: TechStackIcon[] = [
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
];

const techStack5: TechStackIcon[] = [
  { name: "Bootstrap", icon: <DiBootstrap className="text-purple-500" /> },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript className="text-yellow-600" />,
  },
  { name: "CSS", icon: <FaCss3Alt className="text-sky-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
];

// Array of projects
export const projects: Project[] = [
  {
    title: "JSF Supply Chain Management",
    description:
      "An application to manage incoming stock by invoices and delivery notes sent from suppliers, supplier and customer contact databases, production recipe planning, production weighing by taking data from production recipes and then multiplying it by the units to be produced, calculating waste production and waste packing.",
    img: JsfSupplyChain,
    techStack: techStack1,
    portfolioUrl: "https://jsf-supplychain.cloud",
    githubUrl:
      "https://github.com/alfalest/javasuperfood-supply-chain",
  },
  {
    title: "Ssayomart",
    description:
      "Ssayomart is an e-commerce project, which was my first professional project as a Frontend Developer. I worked on an existing project, focusing on improving its responsiveness, particularly ensuring a seamless mobile experience for users. If you're viewing it on a large screen and want to switch to mobile view, please refresh the browser for a better experience.",
    img: Ssayomart,
    techStack: techStack2,
    portfolioUrl: "https://ssayomart.com/",
    githubUrl: "https://github.com/alfalest/ssayomart",
  },
  {
    title: "Sipdesa",
    description:
      "Community service application that is very useful to facilitate the process of administrative services in the village in digital form",
    img: Sipdesa,
    techStack: techStack3,
    portfolioUrl: "https://drive.google.com/file/d/1sNmpmpW1pcSkqMDV_yBiKQuP-pq27J7h/view?usp=drive_link",
    githubUrl:
      "https://github.com/alfalest/system-village-integration",
  },
  {
    title: "Ssayomart Company Profile",
    description:
      "Ssayomart is an e-commerce project, which was my first professional project as a Frontend Developer. I worked on an existing project, focusing on improving its responsiveness, particularly ensuring a seamless mobile experience for users. If you're viewing it on a large screen and want to switch to mobile view, please refresh the browser for a better experience.",
    img: SsayomartCp,
    techStack: techStack4,
    portfolioUrl: "https://ssayomart.com",
    githubUrl:
      "https://github.com/alfalest/ssayomart-company-profile",
  },
  {
    title: "Boga Eterna Company Profile",
    description:
      "An company profile for PT Boga Eterna Sentosa",
    img: Boga,
    techStack: techStack5,
    portfolioUrl: "#",
    githubUrl:
      "https://github.com/alfalest/boga-eterna-sentosa",
  },
  // Add more projects as needed
];
