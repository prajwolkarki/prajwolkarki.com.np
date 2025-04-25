import { BackgroundLines } from "@/components/ui/background-lines";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import techStack from "@/constants/techstack";

export default function Hero() {
  const typedRef = useRef<HTMLElement | null>(null);
  const typedInstanceRef = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        "Web developer",
        "React JS developer",
        "Next.JS developer",
        "MERN developer",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      startDelay: 300,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    if (typedRef.current && !typedInstanceRef.current) {
      typedInstanceRef.current = new Typed(typedRef.current, options);
    }
    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy();
        typedInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className=" p-4 md:p-6 max-w-4xl mx-auto md:mt-10">
      <BackgroundLines
        className="pointer-events-none fixed top-0 left-0 w-full h-full -z-10"
        children={undefined}
      />
      <div className="flex flex-col gap-5 md:flex-row justify-between items-start">
        <div className="order-1 md:order-2">
          <h1 className="text-5xl font-bold">
            <span className="text-gray-500">Hi, I'm </span>
            <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-transparent bg-clip-text">
              Prajwol
            </span>
          </h1>
          <h2 className="text-lg bg-gradient-to-r from-fuchsia-600 to-pink-600 mt-2 text-transparent bg-clip-text font-bold">
            <span ref={typedRef}></span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-md dark:text-white">
            A wizard of code, weaving stories through projects and applications.
            I'm passionate about web development and an enthusiast for
            technology, constantly crafting web experiences and building tools
            that make an impact.
          </p>
        </div>

        <div className="mt-6 md:mt-0 md:order-1 md:mr-8">
          <div className="w-32 h-32 md:w-50 md:h-50 border-black dark:border-white border rounded-full p-4">
            <img
              src="/images/profile.png"
              className="w-full h-full object-cover dark:invert"
              alt="Profile illustration"
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {techStack.map((item) => (
            <div
              key={item.name}
              className="flex items-center p-1 border rounded-lg shadow-md dark:bg-[#0A0A0A]"
            >
              <img src={item.logo} alt={item.name} className="w-4 h-4 mr-4 dark:text-white" />
              <div>
                <h4 className="text-sm font-semibold">{item.name}</h4>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
