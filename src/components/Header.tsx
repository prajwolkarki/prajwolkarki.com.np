import { Link } from "react-router";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="py-6 px-4 max-w-6xl mx-auto w-full border-b">
      <div className="flex justify-between items-center">
        <div className="logo">
          <Link to="/" className="text-black text-xl font-medium font-tagesschrift dark:text-white">
            Masu Codes
          </Link>
        </div>
        <ModeToggle/>
      </div>
    </header>
  );
};

export default Header;