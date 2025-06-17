"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "EcoSnap X",
    description:
      "Computer vision-powered garbage classifier that identifies plastic, metal, and organic waste, providing intelligent recycling suggestions through external APIs.",
    techStack: ["Python", "OpenCV", "Machine Learning", "REST APIs"],
    image: "/placeholder.svg?height=200&width=300",
    github: "#",
    demo: "#",
  },
  {
    title: "Labour Chokk",
    description:
      "Digital platform connecting laborers with employers, featuring Ola/Uber-like functionality for seamless hiring and job matching in the construction industry.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    image: "/placeholder.svg?height=200&width=300",
    github: "#",
    demo: "#",
  },
  {
    title: "Maze Solver Bot",
    description:
      "Autonomous wall-following robot designed for TechnoXian competition, featuring advanced pathfinding algorithms and sensor integration for maze navigation.",
    techStack: ["Arduino", "C++", "Ultrasonic Sensors", "Motor Control"],
    image: "/placeholder.svg?height=200&width=300",
    github: "#",
    demo: "#",
  },
  {
    title: "Escalade Bot",
    description:
      "Innovative stair-climbing robot capable of ascending stairs and descending ramps, built for the Escalade robotics competition with advanced mechanical design.",
    techStack: ["Raspberry Pi", "Python", "Servo Motors", "IMU Sensors"],
    image: "/placeholder.svg?height=200&width=300",
    github: "#",
    demo: "#",
  },
]

export default function Projects() {
  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-800/50 border-gray-700 overflow-hidden h-full hover:bg-gray-800/70 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
