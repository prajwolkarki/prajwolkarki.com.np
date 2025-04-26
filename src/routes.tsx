import Layout from "./components/Layout";
import { createBrowserRouter } from "react-router";
import Hero from "./pages/Hero";
import ContactForm from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "/contact",
        element: <ContactForm />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/projects",
        element:<Projects/>
      },
      {
        path:"/blogs",
        element:<Blogs/>
      },
      {
        path:"blogs/:slug",
        element:<BlogPost/>
      }
    ],
  },
]);

export default router;
