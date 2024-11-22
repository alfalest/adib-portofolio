import Hero from "@/features/home/components/hero";
import ExperienceSection from "@/features/work";
import ProjectsPage from "@/features/projetcs";

export default function Home() {
  return (
    <div>
      <Hero
        title="Adib Alfaini"
        jobTitle="Full Stack Developer"
        subtitle="Full Stack Developer, lifelong learner, and an 8-5 tech worker in the office but also enjoying work from anywhere."
        socialLinks={{
          github: "https://github.com/alfalest",
          linkedin: "https://www.linkedin.com/in/adibalfaini/",
          instagram: "https://www.instagram.com/justalfaini/",
        }}
      />

      <ProjectsPage />
      <ExperienceSection />
    </div>
  );
}
