import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes.tsx";
import AnimatedCursor from "react-animated-cursor";

const isDesktop = window.innerWidth > 768;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <RouterProvider router={router} />
      {isDesktop && (
        <AnimatedCursor
          innerSize={12}
          outerSize={30}
          color="193, 11, 111"
          outerAlpha={0.3}
          innerScale={0.8}
          outerScale={3}
          trailingSpeed={8}
          clickables={[
            'a',
            'button',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            '.link',
            '.cursor-pointer'
          ]}
        />
      )}
    </>
  </StrictMode>
);

