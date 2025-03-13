import { Button } from "@/components/ui/button"
import { FileText, Mail } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900 pt-28 md:pt-32">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm a Fullstack Developer with expertise in both frontend and backend technologies. Recently, I've
              specialized in developing complex form-based applications with intuitive UX and robust data handling.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              My strength lies in building scalable, maintainable code and quickly adapting to new technologies. I
              approach each project with attention to detail and a focus on long-term sustainability.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Button asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" /> Get in Touch
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#">
                <FileText className="mr-2 h-4 w-4" /> View Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

