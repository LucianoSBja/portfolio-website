import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Globe, GitBranch } from "lucide-react"

const skillCategories = [
  {
    title: "Backend",
    icon: <Server className="h-8 w-8 text-primary" />,
    skills: ["Node.js", "FastAPI", "Python", "Express", "RESTful APIs"],
  },
  {
    title: "Frontend",
    icon: <Globe className="h-8 w-8 text-primary" />,
    skills: ["React", "JavaScript/TypeScript", "HTML/CSS", "Responsive Design"],
  },
  {
    title: "Databases",
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: ["PostgreSQL", "MongoDB", "SQL", "ORM"],
  },
  {
    title: "DevOps",
    icon: <GitBranch className="h-8 w-8 text-primary" />,
    skills: ["Git", "GitHub", "CI/CD", "Docker", "AWS"],
  },
  {
    title: "Other",
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: ["API Development", "System Architecture", "Performance Optimization"],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900 pt-28 md:pt-32">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-l-4 border-l-primary h-full">
              <CardContent className="p-5">
                <div className="flex items-center space-x-3 mb-3">
                  {category.icon}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{category.title}</h3>
                </div>
                <ul className="space-y-1">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

