import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";

interface TechStackIcon {
  name?: string;
  icon: React.ReactNode;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  img: string;
  techStack: TechStackIcon[];
  portfolioUrl?: string;
  githubUrl?: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  img,
  techStack,
  portfolioUrl,
  githubUrl,
}) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl pointer-events-auto"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/20 p-2 text-white transition-colors hover:bg-black/40 backdrop-blur-md"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col lg:flex-row h-full">
                {/* Image Section */}
                <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="flex-1 overflow-y-auto p-6 lg:p-10">
                  <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-100"
                  >
                    {title}
                  </motion.h2>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                      About Project
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {description}
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {techStack.map((tech, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 px-3 py-2 text-sm"
                        >
                          <span className="text-xl">{tech.icon}</span>
                          <span className="font-medium text-zinc-700 dark:text-zinc-300">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800"
                  >
                    {portfolioUrl && (
                      <a
                        href={portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700 shadow-lg shadow-blue-500/20"
                      >
                        <ExternalLink size={18} />
                        Live Preview
                      </a>
                    )}
                    {githubUrl && (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 px-6 py-3 text-sm font-bold text-zinc-900 dark:text-zinc-100 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-700"
                      >
                        <Github size={18} />
                        Source Code
                      </a>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
