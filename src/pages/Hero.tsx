import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const typedRef = useRef<HTMLElement | null>(null);
  const typedInstanceRef = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        "Web developer",
        "React developer",
        "Next.js developer",
        "Node.js developer",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      startDelay: 300,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    // Check if the element exists and there's no existing instance
    if (typedRef.current && !typedInstanceRef.current) {
      typedInstanceRef.current = new Typed(typedRef.current, options);
    }

    // Cleanup function
    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy();
        typedInstanceRef.current = null;
      }
    };
  }, []);
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <div>
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

        <div className="mt-6 md:mt-0">
          <div className="w-32 h-32 md:w-45 md:h-45">
            <img
              src="/images/profile.png"
              className="w-full h-full object-cover dark:invert"
              alt="Profile illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
