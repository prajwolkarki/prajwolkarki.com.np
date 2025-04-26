import { NavLink } from "react-router";
import { ModeToggle } from "./mode-toggle";
import { navLinks } from "@/constants/links";
import { HamBurger } from "./HamBurger";

const Header = () => {
  return (
    <header className="py-6 px-4 max-w-6xl mx-auto w-full border-b">
      <div className="flex justify-between items-center">
        <div className="logo">
          <NavLink
            to="/"
            className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-transparent bg-clip-text text-xl font-medium font-tagesschrift"
          >
            Jholey Codes
          </NavLink>
        </div>
        <div className=" items-center font-tagesschrift md:flex">
          <div className="hidden lg:block">
            {navLinks.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) =>
                  `relative mx-4 pb-1 text-gray-600 dark:text-white 
             ${
               isActive
                 ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
                 : "hover:text-fuchsia-600"
             }
             group`
                }
              >
                {item.title}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-full scale-x-0 transform bg-gradient-to-r from-pink-500 to-purple-500 transition-transform duration-300 group-hover:scale-x-100" />
              </NavLink>
            ))}
          </div>
          <div className="flex items-center">
            <ModeToggle />
            <HamBurger />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
