import TitleSection from "@/components/title.section";
// import gintoki from "@/assets/about/gintoki.png";
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
          I am a dedicated Web Developer specializing in full-stack development, adept at utilizing
          Codeigniter 4, PHP, and Laravel to build powerful web applications. My expertise extends to
          crafting dynamic user interfaces with HTML, CSS, JavaScript, Bootstrap, ReactJS, and VueJS. I
          have a proven track record of delivering successful e-commerce platforms and service system
          applications, ensuring seamless API integration and secure payment systems. With a
          background in IT support, I excel in maintaining and troubleshooting complex systems. As a
          continuous learner, I stay ahead of industry trends to provide innovative and high-quality web
          solutions.
        </p>
        <a
          className="mt-2 inline-flex text-gray-600 underline hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          href="https://drive.google.com/file/d/1Hc2zOxEC-7zbyWPhmtX6YB5NRmehkMZu/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2">
            <SiReaddotcv />
            Resume
          </div>
        </a>
      </div>
      {/* <img
        src={gintoki}
        alt="Descriptive Alt Text"
        className="mb-4 h-auto w-full md:mb-0 md:w-1/3"
      /> */}
    </div>
  );
};

export default About;
