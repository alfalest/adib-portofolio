import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import ProjectModal from "./modal.project";

interface TechStackIcon {
  name?: string;
  icon: React.ReactNode;
}

interface CardProjectProps {
  title: string;
  description: string;
  img: string;
  techStack: TechStackIcon[];
  portfolioUrl?: string;
  githubUrl?: string;
}

const CardProject: React.FC<CardProjectProps> = ({
  title,
  description,
  techStack,
  img,
  portfolioUrl,
  githubUrl,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card flex h-full flex-col overflow-hidden rounded-xl transition-all duration-300"
      >
        {/* Image section with overlay on hover */}
        <div
          className="relative h-48 overflow-hidden group cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={img}
            alt={title}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
            <p className="text-white text-xs font-medium">Click to see details</p>
          </div>
        </div>

        <div className="flex flex-col flex-grow p-5">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {title}
          </h2>
          <div className="mb-6 flex-grow">
            <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-400 mb-2">
              {description}
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 uppercase tracking-wider transition-colors"
            >
              Learn More
            </button>
          </div>

          {/* Tech stack section */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center text-gray-500 dark:text-gray-400"
                title={tech.name}
              >
                <span className="text-xl">{tech.icon}</span>
              </div>
            ))}
          </div>

          {/* Links section */}
          <div className="flex items-center gap-4 mt-auto border-t border-border pt-4">
            {portfolioUrl && (
              <motion.a
                whileHover={{ x: 2 }}
                href={portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Live Demo
                <GoArrowUpRight className="ml-1 h-4 w-4" />
              </motion.a>
            )}
            {githubUrl && githubUrl !== "#" && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <FaGithub className="h-5 w-5" />
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>

      <ProjectModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        description={description}
        img={img}
        techStack={techStack}
        portfolioUrl={portfolioUrl}
        githubUrl={githubUrl}
      />
    </>
  );
};

export default CardProject;
