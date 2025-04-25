import Layout from "./components/Layout";
import { createBrowserRouter } from "react-router";
import Hero from "./pages/Hero";
import ContactForm from "./pages/Contact";

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
        path:"/contact",
        element:<ContactForm />,
      }
    ],
  },
  
]);

export default router;
