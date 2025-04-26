import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { ThemeProvider } from "@/components/theme-provider";
import TitleUpdater from "./TitleUpdater";

const Layout = () => {
  return (
    <ThemeProvider>
      <TitleUpdater/>
      <div className="min-h-screen flex flex-col px-3 w-full md:max-w-[65%] mx-auto">
        <Header />
        <main className="flex-grow mx-auto w-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
