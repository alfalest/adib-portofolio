import React from "react";
import { useLocation } from "react-router-dom";
import CardProject from "./components/card.project";
import TitleSection from "@/components/title.section";
import { projects } from "@/data/projects.data";

const ProjectsPage: React.FC = () => {
  const location = useLocation();

  // Check if the current route is "/projects"
  const isProjectsRoute = location.pathname === "/projects";

  return (
    <div className="mt-10">
      <TitleSection title="Projects" />
      {isProjectsRoute && (
        <p className="mb-2 mt-6 font-mono text-xl text-zinc-600 dark:text-zinc-300">
          A professional showcase of my expertise and accomplishments in web development.
        </p>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {(isProjectsRoute ? projects : projects.slice(0, 3)).map(
          (project, index) => (
            <CardProject
              key={index}
              title={project.title}
              description={project.description}
              img={project.img}
              techStack={project.techStack}
              githubUrl={project.githubUrl}
              portfolioUrl={project.portfolioUrl}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
