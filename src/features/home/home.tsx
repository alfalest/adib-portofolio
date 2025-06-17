import Hero from "@/features/home/components/hero";
import ExperienceSection from "@/features/work";
import ProjectsPage from "@/features/projetcs";

export default function Home() {
  return (
    <div>
      <Hero
        title="Adib Alfaini"
        jobTitle="Full Stack Developer"
        subtitle="Full-stack Dev • Tech Enthusiast • Making life easier through the magic of technology ☕"
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
