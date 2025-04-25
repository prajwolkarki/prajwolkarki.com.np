import techStack from "@/constants/techstack";
import Marquee from "react-fast-marquee";

const TechCard = ({ tech, index }: { tech: any; index: number }) => (
  <div
    key={index}
    className="flex items-center space-x-2 bg-gray-100 dark:bg-neutral-800 px-2 py-1 rounded-[4px] shadow-sm transition-transform duration-300 hover:scale-105 w-40 h-14 mr-2 overflow-hidden"
  >
    <img src={tech.logo} alt={tech.name} className="w-5 h-5 flex-shrink-0" />
    <div className="overflow-hidden">
      <p className="text-sm font-medium truncate">{tech.name}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
        {tech.description}
      </p>
    </div>
  </div>
);

const TechStack = () => {
  const firstRow = techStack.slice(0, 6);
  const secondRow = techStack.slice(6);

  return (
    <div className="relative flex w-full flex-col mt-5 items-center justify-center overflow-hidden h-auto gap-4 py-4">
      <Marquee pauseOnHover direction="left" speed={30} gradient={false}>
        <div className="flex">
          {firstRow.map((tech, index) => (
            <TechCard key={`first-${tech.name}`} tech={tech} index={index} />
          ))}
        </div>
      </Marquee>
      <Marquee pauseOnHover direction="right" speed={20} gradient={false}>
        <div className="flex">
          {secondRow.map((tech, index) => (
            <TechCard key={`second-${tech.name}`} tech={tech} index={index} />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TechStack;
