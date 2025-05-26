import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="py-8 px-4 dark:bg-gray-900 bg-gray-800 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center gap-6 text-2xl mb-6">
          <a
            href="https://www.linkedin.com/in/loay-adel/"
            target="_blank"
            className="text-gray-400 hover:text-primaryCyan-400 transition-colors"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.freelancer.com/u/loayadel10"
            target="_blank"
            className="text-gray-400 hover:text-primaryCyan-400 transition-colors"
          >
            <SiFreelancer />
          </a>
          <a
            href="mailto:loay-adel@outlook.com"
            className="text-gray-400 hover:text-primaryCyan-400 transition-colors"
          >
            <PiMicrosoftOutlookLogoFill />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-gray-400 hover:text-primaryCyan-400 transition-colors"
          >
            <FaGithub />
          </a>
        </div>
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Loay Adel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
