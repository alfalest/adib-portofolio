import { FaGitAlt, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiDbeaver, SiPostman } from "react-icons/si";

const tools = [
  {
    name: "VSCode",
    icon: <VscVscode className="text-sky-500 dark:text-sky-600" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-500 dark:text-orange-500" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-800 dark:text-gray-300" />,
  },
  {
    name: "DBeaver",
    icon: <SiDbeaver className="text-amber-800 dark:text-amber-700" />,
  },
  {
    name: "Postman",
    icon: <SiPostman className="text-orange-600 dark:text-orange-500" />,
  },
];

export default function DeveloperTools() {
  return (
    <div className="mt-5">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        Developer Tools
      </h2>
      <div className="mt-5 flex flex-wrap justify-start gap-6">
        {tools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-2 text-4xl">{tool.icon}</div>
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
