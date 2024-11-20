import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

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
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 dark:hover:text-blue-500"
  >
    <Icon className="ml-2 text-3xl" />
  </a>
);

const Hero: React.FC<HeroProps> = ({
  title = "Frontend Developer",
  jobTitle = "Software Engineer",
  subtitle = "I'm a Frontend Developer",
  socialLinks = {
    github: "https://github.com/alfalest",
    instagram: "https://instagram.com/justalfaini",
    linkedin: "https://linkedin.com/in/adibalfaini",
  },
}) => {
  return (
    <div className="flex flex-col justify-start space-y-4">
      <h1 className="font-mono text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 md:text-5xl">
        Hi!, You can call me{" "}
        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          {title}
        </span>
      </h1>
      <p className="dark:text-zinc-390 mt-6 text-base text-zinc-600">
        {jobTitle}
      </p>
      <p className="dark:text-zinc-390 mt-6 font-mono text-xl text-zinc-600">
        {subtitle}
      </p>
      <div className="mt-6 flex">
        {socialLinks.github && (
          <SocialIcon href={socialLinks.github} Icon={FaSquareGithub} />
        )}
        {socialLinks.linkedin && (
          <SocialIcon href={socialLinks.linkedin} Icon={FaLinkedin} />
        )}
        {socialLinks.instagram && (
          <SocialIcon href={socialLinks.instagram} Icon={RiInstagramFill} />
        )}
      </div>
    </div>
  );
};

export default Hero;
