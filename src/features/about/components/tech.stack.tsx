import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import {
  SiTailwindcss,
  SiJavascript,
  SiBootstrap,
  SiNestjs,
  SiPhp,
  SiCodeigniter,
  SiExpress,
  SiReact,
  // SiQuarkus,
  // SiVuedotjs
} from "react-icons/si";
import {
  FaCss3Alt,
  FaHtml5, FaLaravel,
  // FaReact,
  // FaNodeJs,
  // FaJava
} from "react-icons/fa";


const techStack = [
  { name: "PHP", icon: <SiPhp className="text-indigo-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-600" /> },
  { name: "CodeIgniter", icon: <SiCodeigniter className="text-red-600" /> },
  { name: "NestJS", icon: <SiNestjs className="text-red-600" /> },
  { name: "ExpressJS", icon: <SiExpress className="dark:text-white text-dark" /> },
  // { name: "Quarkus", icon: <SiQuarkus className="text-blue-600" /> },
  { name: "PostGreSQL", icon: <BiLogoPostgresql className="text-blue-700" /> },
  { name: "MySQL", icon: <GrMysql className="text-blue-700" /> },
  { name: "ReactJS", icon: <SiReact className="text-blue-600" /> },
  // { name: "VueJS", icon: <SiVuedotjs className="text-teal-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-sky-500" /> },
];

export default function TechStack() {
  return (
    <div className="mt-5">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        Tech Stack
      </h2>
      <div className="mt-5 flex flex-wrap justify-start gap-6">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-2 text-4xl">{tech.icon}</div>
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
