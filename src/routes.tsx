import Layout from "./components/Layout";
import { createBrowserRouter } from "react-router";
import Hero from "./pages/Hero";
import ContactForm from "./pages/Contact";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import Guestbook from "./pages/Guestbook";
import Projects from "./pages/Projects";

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
        path: "/guestbook",
        element: <Guestbook />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "blogs/:slug",
        element: <BlogPost />,
      },
      {
        path:"/projects",
        element:<Projects />,
      }
    ],
  },
]);

export default router;
