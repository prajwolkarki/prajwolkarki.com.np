import { useState } from "react";
import {
  ArrowRight,
  Code,
  Download,
  Github,
  Linkedin,
  Mail,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const [activeTab, setActiveTab] = useState("about");

  const codeString = `/PrajwolKarki/routes/about.js
import express from "express";
const router = express.Router();
router.get("/about", (req, res) => {
  res.status(200).json({ 
    message: "Hi, I'm a passionate developer who loves building web applications with modern technologies!"
  });
});
export default router;`;

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="sticky top-20">
            <div className="flex flex-col items-center mb-8">
              <div
                className="relative w-60 h-70 overflow-hidden mb-4"
                style={{ borderRadius: "38% 62% 42% 58% / 57% 44% 56% 43% " }}
              >
                <img
                  src="/images/real.png"
                  alt="Prajwol Karki"
                  className="object-contain"
                />
              </div>
              <h1 className="text-2xl font-bold">Prajwol Karki</h1>
              <p className="text-muted-foreground">Full Stack Developer</p>

              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </div>

              <div className="w-full mt-8">
                <Link
                  to="https://www.overleaf.com/read/qfkhmkvszdwv#d5276a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="about" className="flex items-center">
                <User className="mr-2 h-4 w-4" /> About Me
              </TabsTrigger>
              <TabsTrigger value="code" className="flex items-center">
                <Code className="mr-2 h-4 w-4" /> Education
              </TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">More About Me!!</h2>
                  <p className="text-sm font-tagesschrift leading-relaxed">
                    I'm a passionate individual with expertise in various
                    fields. I enjoy solving complex problems and creating
                    intuitive, user-friendly experiences.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-tagesschrift font-semibold mb-3">
                    What I Do
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">
                          Frontend Development
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Building responsive and interactive user interfaces
                          using React, Next.js, and modern CSS frameworks.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">
                          Backend Development
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Creating robust server-side applications with Node.js,
                          Express, and various database technologies.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">API Development</h4>
                        <p className="text-sm text-muted-foreground">
                          Designing and implementing RESTful APIs and GraphQL
                          services for seamless data exchange.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">DevOps</h4>
                        <p className="text-sm text-muted-foreground">
                          Setting up CI/CD pipelines and managing cloud
                          infrastructure for optimal application performance.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold  font-tagesschrift mb-3">
                    My Journey
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    My journey in software development began with a curiosity
                    about how websites work. This curiosity evolved into a
                    passion for creating digital experiences that solve
                    real-world problems. Over the years, I've worked on various
                    projects ranging from e-commerce platforms to content
                    management systems.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm constantly learning and exploring new technologies to
                    stay at the forefront of web development. When I'm not
                    coding, you can find me hiking, reading tech blogs, or
                    experimenting with new programming languages.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold font-tagesschrift mb-3">
                    Let's Connect
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm always open to discussing new projects, creative ideas,
                    or opportunities to be part of your vision.
                  </p>
                  <Button variant="outline" className="flex items-center">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="code" className="mt-2">
              <SyntaxHighlighter
                language="javascript"
                style={dracula}
                showLineNumbers
                customStyle={{
                  overflow: "hidden",
                  scrollbarWidth: "none",
                  overflowX: "auto",
                  fontSize: "12px",
                }}
              >
                {codeString}
              </SyntaxHighlighter>
              <div className="flex flex-col space-y-3 mt-7">
              <h1 className="font-tagesschrift text-2xl mb-3">Education</h1>
              <p className="text-slate-600 text-sm font-roboto-mono">Academic Experiences That Defined Me</p>
              <div className="flex flex-row gap-4 items-start p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                <img
                  src="images/patan.jpg"
                  alt="Patan Multiple Campus"
                  className="w-16 h-16 object-cover"
                />
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold tracking-tight text-lg text-slate-900 dark:text-white">
                    Patan Multiple Campus
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 font-sm">
                    Bachelor In Information Technology
                  </p>
                  <Badge className="w-fit bg-red-600 hover:bg-blue-700 text-white">
                    2020-2025
                  </Badge>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Currently studying Information Technology
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-start p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                <img
                  src="images/kist.jpg"
                  alt="Patan Multiple Campus"
                  className="w-16 h-16 object-cover"
                />
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold tracking-tight text-lg text-slate-900 dark:text-white">
                    Kathmandu Institute of Science and Technology
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 font-sm">
                   +2 Science
                  </p>
                  <Badge className="w-fit bg-yellow-600 hover:bg-blue-700 text-white">
                    2018-2019
                  </Badge>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Completed +2 Science with ComputerScience from KIST
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-start p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
                <img
                  src="images/kist.png"
                  alt="Patan Multiple Campus"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold tracking-tight text-lg text-slate-900 dark:text-white">
                    Kaushal English Boarding School
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 font-sm">
                    Secondary Education
                  </p>
                  <Badge className="w-fit bg-green-600 hover:bg-blue-700 text-white">
                    2016-2017
                  </Badge>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
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
  );
}
