import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold text-white">
              LucianoSBja
            </a>
            <p className="text-gray-400 mt-1">Fullstack Developer</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="#about"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:lucianosotobonja95@gmail.com"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Luciano Ezequiel Soto Bonja</p>
        </div>
      </div>
    </footer>
  );
}
