import Layout from "./components/Layout";
import { createBrowserRouter } from "react-router";
import Hero from "./pages/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Hero />,
      }
    ],
  },
]);

export default router;
