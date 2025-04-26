import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SnowflakeCursor from "./components/SnowflakeCursor.tsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <SnowflakeCursor/>
      </QueryClientProvider>
    </>
  </StrictMode>
);
