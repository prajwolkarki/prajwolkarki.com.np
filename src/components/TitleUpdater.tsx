import { useEffect } from "react";
import { useLocation } from "react-router";

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path === "/") {
      document.title = "JholeyCode | Home";
    } else if (path === "/about") {
      document.title = "JholeyCode | About";
    } else if (path === "/contact") {
      document.title = "JholeyCode | Contact";
    } else if (path === "/blogs") {
      document.title = "JholeyCode | Blogs";
    } else if (path === "/projects") {
      document.title = "JholeyCode | Projects";
    } else {
      document.title = "JholeyCode";
    }
  }, [location]);

  return null;
};

export default TitleUpdater;
