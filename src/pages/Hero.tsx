

export default function Hero() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <div>
          <h1 className="text-5xl font-bold">
            <span className="text-gray-500">Hi, I'm </span>
            <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-transparent bg-clip-text">Prajwol</span>
          </h1>
          <h2 className="text-lg bg-gradient-to-r from-fuchsia-600 to-pink-600 mt-2 text-transparent bg-clip-text font-bold">Web developer</h2>
          
          <p className="text-gray-600 mt-4 max-w-md dark:text-white">
            A wizard of code, weaving stories through projects and
            applications. I'm passionate about web development and
            an enthusiast for technology, constantly crafting web
            experiences and building tools that make an impact.
          </p>
        </div>
        
        <div className="mt-6 md:mt-0">
          <div className="w-32 h-32 md:w-45 md:h-45">
            <img 
              src="/images/profile.png"
              className="w-full h-full object-cover dark:background-transparent" 
              alt="Profile illustration" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}