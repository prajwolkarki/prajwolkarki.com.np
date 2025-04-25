import { GithubIcon, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 mt-12 border-t">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-600 font-tagesschrift">
            © {currentYear} Prajwol. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <Link to="https://github.com" className="text-gray-600 hover:text-green-500 transition-colors" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="w-5 h-5" />
          </Link>
          <Link to="https://linkedin.com" className="text-gray-600 hover:text-green-500 transition-colors" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link to="https://twitter.com" className="text-gray-600 hover:text-green-500 transition-colors" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;