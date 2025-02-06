import TitleSection from "@/components/title.section";
import adib from "@/assets/about/adib.png";
import { SiReaddotcv } from "react-icons/si";

const About: React.FC = () => {
  return (
    <div className="flex flex-col-reverse items-start md:flex-row md:items-center">
      <div className="flex-1 md:pr-4">
        <TitleSection title="About" />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          Muhammad Adib Alfaini Afifi
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Hi there! I'm a Full Stack Developer with a passion for building high quality, user centric applications. I'm proficient in a range of modern frameworks like Laravel, Codeigniter, Express JS, Nest JS, Vue JS, and React JS, and possess strong front-end and back-end development skills. I'm always eager to learn and contribute to innovative projects. Feel free to connect!
        </p>
        <a
          className="mt-2 inline-flex text-gray-600 underline hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          href="https://drive.google.com/file/d/1UuLb7U2M8PtKjFFr42Dbo_NMzHVtEV9h/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2">
            <SiReaddotcv />
            Resume
          </div>
        </a>
      </div>
      <img
        src={adib}
        alt="Descriptive Alt Text"
        className="mb-4 h-auto w-full md:mb-0 md:w-1/3"
      />
    </div>
  );
};

export default About;
