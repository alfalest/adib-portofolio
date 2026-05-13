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
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl shadow-black/30 pointer-events-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-20 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50 hover:scale-110 backdrop-blur-md"
              >
                <X size={20} />
              </button>

              {/* Image Section - Full width, natural aspect ratio */}
              <div className="relative w-full overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-auto object-contain"
                />
                {/* Gradient overlay at the bottom of the image for a smooth transition */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent" />
              </div>

              {/* Content Section */}
              <div className="px-6 pb-8 lg:px-10 lg:pb-10 -mt-6 relative z-10">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl sm:text-3xl font-bold mb-5 text-zinc-900 dark:text-zinc-100"
                >
                  {title}
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6"
                >
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
                    About Project
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6"
                >
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.03 }}
                        className="flex items-center gap-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 px-3 py-2 text-sm border border-zinc-200/50 dark:border-zinc-700/50"
                      >
                        <span className="text-lg">{tech.icon}</span>
                        <span className="font-medium text-zinc-700 dark:text-zinc-300">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-3 pt-6 border-t border-zinc-200 dark:border-zinc-800"
                >
                  {portfolioUrl && (
                    <a
                      href={portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
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
                      className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 px-6 py-3 text-sm font-bold text-zinc-900 dark:text-zinc-100 transition-all hover:bg-zinc-200 dark:hover:bg-zinc-700 active:scale-95"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
