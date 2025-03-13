import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Rocbird Web",
    description: "Custom alternative to WIX for Big Data & IT solutions.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 2,
    title: "AI-powered Audio/Text Analysis",
    description: "Smart transcription and insights using GPT-4 & Whisper API.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "FastAPI", "GPT-4", "React"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Full-featured solution with inventory management and payment processing.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    demoLink: "#",
    codeLink: "#",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800 pt-28 md:pt-32">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-40 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pb-2">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demoLink}>
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.codeLink}>
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

