import { Linkedin, Github, BriefcaseBusiness, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 dark:bg-gray-900 bg-gray-800 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center gap-6 text-2xl mb-6">
          <a
            href="https://www.linkedin.com/in/loay-adel/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primaryCyan-400 transition-colors"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.freelancer.com/u/loayadel10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primaryCyan-400 transition-colors"
            aria-label="Freelancer profile"
          >
            <BriefcaseBusiness size={24} />
          </a>
          <a
            href="mailto:loay-adel@outlook.com"
            className="text-gray-400 hover:text-primaryCyan-400 transition-colors"
            aria-label="Email contact"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com/loay-adel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primaryCyan-400 transition-colors"
            aria-label="GitHub profile"
          >
            <Github size={24} />
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
