import Layout from "./components/Layout";
import { createBrowserRouter } from "react-router";
import Hero from "./pages/Hero";
import ContactForm from "./pages/Contact";
import About from "./pages/About";
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
        path:"/projects",
        element:<Projects/>
      }
    ],
  },
]);

export default router;
