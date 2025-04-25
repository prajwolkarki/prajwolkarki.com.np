import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { ThemeProvider } from "@/components/theme-provider";

const Layout = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col max-w-[65%] mx-auto">
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
