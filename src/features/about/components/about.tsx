import TitleSection from "@/components/title.section";
import adib from "@/assets/about/adib.png";
import { SiReaddotcv } from "react-icons/si";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="flex flex-col-reverse items-start md:flex-row md:items-center gap-12 py-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <TitleSection title="About" />
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-5xl mb-6">
          Muhammad Adib Alfaini Afifi
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          Hi there! I'm a <span className="text-blue-600 dark:text-blue-400 font-semibold">Full Stack Developer</span> with a passion for building high quality, user centric applications.
          I'm proficient in a range of modern frameworks like Laravel, Codeigniter, Express JS, Nest JS, Vue JS, and React JS, and possess strong front-end and back-end development skills.
          I'm always eager to learn and contribute to innovative projects. Feel free to connect!
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-xl transition-all shadow-sm"
          href="https://drive.google.com/file/d/1gMpWPCKit1B40XPE22ALmxlHrQOqIzeV/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiReaddotcv className="text-blue-600" />
          <span className="font-semibold">View Resume</span>
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/3 relative"
      >
        <img
          src={adib}
          alt="Muhammad Adib Alfaini Afifi"
          className="relative rounded-2xl w-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default About;
