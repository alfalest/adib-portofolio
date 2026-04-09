import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { motion } from "framer-motion";

interface HeroProps {
  title?: string;
  subtitle?: string;
  jobTitle?: string;
  socialLinks?: {
    github?: string;
    instagram?: string;
    linkedin?: string;
  };
}

const SocialIcon: React.FC<{ href: string; Icon: React.ElementType }> = ({
  href,
  Icon,
}) => (
  <motion.a
    whileHover={{ y: -3, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center text-gray-500 transition-colors duration-200 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
  >
    <Icon className="text-3xl" />
  </motion.a>
);

const Hero: React.FC<HeroProps> = ({
  title = "Full Stack Developer",
  jobTitle = "Full Stack Developer",
  subtitle = "I'm a Full Stack Developer",
  socialLinks = {
    github: "https://github.com/alfalest",
    instagram: "https://instagram.com/dibalfafi",
    linkedin: "https://linkedin.com/in/adibalfaini",
  },
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center min-h-[60vh] py-20"
    >
      <motion.p
        variants={itemVariants}
        className="text-blue-600 dark:text-blue-400 font-mono font-medium mb-4"
      >
        Hi there! You can call me
      </motion.p>

      <motion.h1
        variants={itemVariants}
        className="text-5xl font-extrabold tracking-tight text-zinc-800 dark:text-zinc-100 md:text-7xl lg:text-8xl mb-6"
      >
        <span className="text-gradient">
          {title}
        </span>
      </motion.h1>

      <motion.h2
        variants={itemVariants}
        className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300 md:text-3xl mb-4"
      >
        {jobTitle}
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10"
      >
        {subtitle}
      </motion.p>

      <motion.div variants={itemVariants} className="flex items-center gap-6">
        {socialLinks.github && (
          <SocialIcon href={socialLinks.github} Icon={FaSquareGithub} />
        )}
        {socialLinks.linkedin && (
          <SocialIcon href={socialLinks.linkedin} Icon={FaLinkedin} />
        )}
        {socialLinks.instagram && (
          <SocialIcon href={socialLinks.instagram} Icon={RiInstagramFill} />
        )}
      </motion.div>
    </motion.div>
  );
};

export default Hero;
