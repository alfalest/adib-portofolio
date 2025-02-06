import { BriefcaseBusiness } from "lucide-react";
import WorkExperience from "./components/works.experience";

const ExperienceSection = () => {
  const workExperiences = [
    {
      company: "PT Elixer Reka Digita",
      title: "Full Stack Developer",
      date: "Dec 2024 - Present",
      location: "Hybrid",
      icon: (
        <BriefcaseBusiness className="h-6 w-6 text-gray-500 dark:text-white" />
      ),
    },
    {
      company: "PT Aneka Dasuib Jaya",
      title: "Tech Lead - Full Stack Developer",
      date: "Aug 2023 - Dec 2024",
      icon: (
        <BriefcaseBusiness className="h-6 w-6 text-gray-500 dark:text-white" />
      ),
    },
    {
      company: "PT Latifah Medika Alkesindo",
      title: "IT Support",
      date: "Feb 2023 - July 2023",
      icon: (
        <BriefcaseBusiness className="h-6 w-6 text-gray-500 dark:text-white" />
      ),
    },
    {
      company: "CV Berdaring Indonesia",
      title: "Full Stack Developer",
      date: "Jan 2022 - Feb 2023",
      location: "Hybrid",
      icon: (
        <BriefcaseBusiness className="h-6 w-6 text-gray-500 dark:text-white" />
      ),
    },
    {
      company: "PT Dessa Integrasi Globalindo",
      title: "Web Developer",
      date: "Jan 2021 - Dec 2021",
      location: "Work From Home",
      icon: (
        <BriefcaseBusiness className="h-6 w-6 text-gray-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div>
      <WorkExperience experiences={workExperiences} />
    </div>
  );
};

export default ExperienceSection;
