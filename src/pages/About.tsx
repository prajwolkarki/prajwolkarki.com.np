import { useState } from "react";
import {
  ArrowRight,
  University,
  Download,
  Github,
  Linkedin,
  Mail,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import Terminal from "@/components/Terminal";

export default function About() {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 max-w-full min-w-[360px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="md:col-span-1">
          <div className="sticky top-20">
            <div className="flex flex-col items-center mb-8">
              <div
                className="relative w-40 h-40 sm:w-60 sm:h-70 overflow-hidden mb-4"
                style={{ borderRadius: "38% 62% 42% 58% / 57% 44% 56% 43% " }}
              >
                <img
                  src="/images/real.png"
                  alt="Prajwol Karki"
                  className="object-contain w-full h-full"
                />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-center">Prajwol Karki</h1>
              <p className="text-muted-foreground text-center text-sm sm:text-base">Full Stack Developer</p>

              <div className="flex gap-2 mt-4">
                <Button asChild variant="outline" size="icon" className="rounded-full">
                  <Link
                    to="https://github.com/prajwolkarki"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full">
                  <Link
                    to="https://www.linkedin.com/in/prajwolkarki/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon" className="rounded-full">
                  <Link to="mailto:prajwolkarki609@gmail.com" aria-label="Email">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>

              <div className="w-full mt-8 flex justify-center">
                <Link
                  to="https://www.overleaf.com/read/qfkhmkvszdwv#d5276a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="w-auto">
            <Terminal />
          </div>
          <div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-5">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="about" className="flex items-center text-xs sm:text-base">
                  <User className="mr-2 h-4 w-4" /> About Me
                </TabsTrigger>
                <TabsTrigger value="code" className="flex items-center text-xs sm:text-base">
                  <University className="mr-2 h-4 w-4" /> Education
                </TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 font-tagesschrift">More About Me!!</h2>
                    <p className="text-xs sm:text-sm font-tagesschrift leading-relaxed">
                      I'm a passionate individual with expertise in various
                      fields. I enjoy solving complex problems and creating
                      intuitive, user-friendly experiences.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold font-tagesschrift mb-3">My Journey</h3>
                    <p className="dark:text-white font-tagesschrift leading-relaxed mb-4 text-xs sm:text-sm">
                      My journey in software development began with a curiosity
                      about how websites work. This curiosity evolved into a
                      passion for creating digital experiences that solve
                      real-world problems. Over the years, I've worked on various
                      projects ranging from e-commerce platforms to content
                      management systems.
                    </p>
                    <p className="dark:text-white font-tagesschrift leading-relaxed text-xs sm:text-sm">
                      I'm constantly learning and exploring new technologies to
                      stay at the forefront of web development. When I'm not
                      coding, you can find me hiking, reading tech blogs, or
                      experimenting with new programming languages.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold font-tagesschrift mb-3">Let's Connect</h3>
                    <p className="dark:text-white font-tagesschrift leading-relaxed mb-4 text-xs sm:text-sm">
                      I'm always open to discussing new projects, creative ideas,
                      or opportunities to be part of your vision.
                    </p>
                    <Button asChild variant="outline" className="flex items-center w-full sm:w-35 justify-center">
                      <Link to="/contact">
                        Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="code" className="mt-2">
                <div className="flex flex-col space-y-3 mt-7">
                  <h1 className="font-tagesschrift text-xl sm:text-2xl mb-3">Education</h1>
                  <p className="text-slate-600 text-xs sm:text-sm font-roboto-mono">Academic Experiences That Defined Me</p>

                  {/* Education Items */}
                  {/* Patan Multiple Campus */}
                  <div className="flex flex-col sm:flex-row gap-4 items-start p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                    <img src="images/patan.jpg" alt="Patan Multiple Campus" className="w-14 h-14 sm:w-16 sm:h-16 object-cover" />
                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold tracking-tight text-base sm:text-lg text-slate-900 dark:text-white">
                        Patan Multiple Campus
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                        Bachelor In Information Technology
                      </p>
                      <Badge className="w-fit bg-red-600 hover:bg-blue-700 text-white text-xs sm:text-sm">2020-2025</Badge>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Currently studying Information Technology
                      </p>
                    </div>
                  </div>

                  {/* KIST College */}
                  <div className="flex flex-col sm:flex-row gap-4 items-start p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                    <img src="images/kist.jpg" alt="KIST" className="w-14 h-14 sm:w-16 sm:h-16 object-cover" />
                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold tracking-tight text-base sm:text-lg text-slate-900 dark:text-white">
                        Kathmandu Institute of Science and Technology
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm">+2 Science</p>
                      <Badge className="w-fit bg-yellow-600 hover:bg-blue-700 text-white text-xs sm:text-sm">2018-2019</Badge>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Completed +2 Science with Computer Science from KIST
                      </p>
                    </div>
                  </div>

                  {/* Kaushal English Boarding School */}
                  <div className="flex flex-col sm:flex-row gap-4 items-start p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                    <img src="images/kist.png" alt="Kaushal English Boarding School" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover" />
                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold tracking-tight text-base sm:text-lg text-slate-900 dark:text-white">
                        Kaushal English Boarding School
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm">Secondary Education</p>
                      <Badge className="w-fit bg-green-600 hover:bg-blue-700 text-white text-xs sm:text-sm">2016-2017</Badge>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Completed SEE from Kaushal English Boarding School
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
