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
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="sticky top-20">
            <div className="flex flex-col items-center mb-8">
              <div className="relative w-60 h-70 overflow-hidden mb-4" style={{ borderRadius: '38% 62% 42% 58% / 57% 44% 56% 43% ' }} >
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
                <Link to="https://www.overleaf.com/read/qfkhmkvszdwv#d5276a" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
                <Code className="mr-2 h-4 w-4" /> Code Snippet
              </TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    More About Me!!
                  </h2>
                  <p className="text-sm font-tagesschrift leading-relaxed">
                    I'm a passionate individual with expertise in
                    various fields. I enjoy solving complex
                    problems and creating intuitive, user-friendly experiences.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-tagesschrift font-semibold mb-3">What I Do</h3>
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
                  <h3 className="text-xl font-semibold  font-tagesschrift mb-3">My Journey</h3>
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
                  <h3 className="text-xl font-semibold font-tagesschrift mb-3">Let's Connect</h3>
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

            <TabsContent value="code" className="mt-6">
            
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
