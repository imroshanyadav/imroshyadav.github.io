"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "JavaScript", "TypeScript", "Java", "MATLAB"],
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "AI/ML Libraries",
    skills: ["Scikit-learn", "Pandas", "NumPy", "OpenCV", "TensorFlow", "PyTorch"],
    color: "from-cyan-400 to-cyan-600",
  },
  {
    title: "Tools & Platforms",
    skills: ["GitHub", "Vercel", "Docker", "Linux", "VS Code", "Jupyter"],
    color: "from-green-400 to-green-600",
  },
  {
    title: "Robotics & Embedded",
    skills: ["Arduino", "Raspberry Pi", "Sensors", "Motor Drivers", "PCB Design", "3D Printing"],
    color: "from-orange-400 to-orange-600",
  },
]

export default function Skills() {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 h-full hover:bg-gray-800/70 transition-colors">
                <CardHeader>
                  <CardTitle className={`text-lg bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 text-center"
                      >
                        {skill}
                      </div>
                    ))}
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
