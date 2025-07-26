"use client"

import { useState } from "react"
import { ExternalLink, Github, } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const projects = [
  {
    id: 1,
    title: "Blog Sansar",
    description: "A MERN stack blog platform with authentication, post creation/editing, comments, and user profiles.",
    image: "/images/blog.png",
    tags: ["MongoDB", "Express", "NEXT"],
    liveUrl: "https://blog.prajwolkarki.com.np",
    githubUrl: "https://github.com/prajwolkarki/personalblogapp",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Jholey Codes",
    description: "A Personal Portfolio app made using the React.",
    image: "/images/portfolio.png",
    tags: ["React", "Sanity", "Firebase"," Tailwind CSS","Shadcn UI"],
    liveUrl: "https://prajwolkarki.com.np",
    githubUrl: "https://github.com/prajwolkarki/persona",
    category: "frontend",
  },
  {
    id: 3,
    title: "Ecommerce App",
    description: "A simple e-commerce app built with React and Zustand, featuring product listing, cart management, and checkout.",
    image: "/images/ecommerce.png",
    tags: ["Zustand", "FakeStore API", "React"],
    liveUrl: "https://ecommerce-theta-lovat-25.vercel.app/",
    githubUrl: "https://github.com/prajwolkarki/ecommerce",
    category: "frontend",
  },
  {
    id:4,
    title:"Code Snippet",
    description:"A code snippet sharing platform built with Angular and Firebase, allowing users to create, edit, and share code snippets.",
    image:"/images/codesnippet.jpg",
    tags:["Angular","Firebase"],
    liveUrl:"https://code-snippet-cxy2axhsd-prajwol-karkis-projects.vercel.app",
    githubUrl:"https://github.com/prajwolkarki/CodeSnippet",
    category:"frontend"
  },
  {
    id:5,
    title:"Todo Backend",
    description:"A simple todo app backend built with Node.js and Express, providing RESTful APIs for managing tasks.",
    image:"images/todobackend.png",
    tags:["Node.js","Express"],
    liveUrl:"#",
    githubUrl:"https://github.com/prajwolkarki/todobackend",
    category:"backend"
  },
  {
    id:5,
    title:"Hotel Backend",
    description:"A simple hotel restaurent backend built with Node.js and Express, providing RESTful APIs for managing bookings.",
    image:"images/hotel.png",
    tags:["Node.js","Express"],
    liveUrl:"#",
    githubUrl:"https://github.com/prajwolkarki/myhotel-backend",
    category:"backend"
  }
]

const categories = ["all", ...new Set(projects.map((project) => project.category))]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8" id="projects">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2 font-tagesschrift">My Projects</h2>
            <p className="text-muted-foreground">
              Here are some of the projects I have worked on. Click on the cards to view the live demo or the source
              code.
            </p>
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="flex flex-wrap justify-center mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category as string}
                onClick={() => setActiveCategory(category as string)}
                className="capitalize"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden flex flex-col h-full py-0 pb-6 transition-all duration-300 hover:shadow-lg border border-border/40"
                >
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{project.title}</CardTitle>

                    </div>
                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow pb-2">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between gap-2 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">View more of my projects on GitHub</p>
          <Button asChild>
            <a href="https://github.com/prajwolkarki" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Visit My GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
