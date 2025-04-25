import { GithubIcon, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 mt-12 border-t">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-600 font-tagesschrift dark:text-white">
            © {currentYear} Prajwol. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <Link to="https://github.com/prajwolkarki" className="transition-colors" target="_blank">
            <GithubIcon className="w-5 h-5 text-gray-600 dark:text-white hover:text-fuchsia-600" />
          </Link>
          <Link to="https://linkedin.com/in/prajwolkarki" className="transition-colors" target="_blank">
            <Linkedin className="w-5 h-5 text-gray-600 dark:text-white hover:text-fuchsia-600" />
          </Link>
          <Link to="https://instagram.com/prajwol.karki" className="transition-colors" target="_blank">
            <Instagram className="w-5 h-5 text-gray-600 dark:text-white hover:text-fuchsia-600" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;