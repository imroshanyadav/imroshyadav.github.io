"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Cpu, Trophy } from "lucide-react"

export default function About() {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate tech enthusiast with a deep focus on machine learning, computer vision, and robotics. My
              journey in technology is driven by the desire to create intelligent systems that solve real-world
              problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I've participated in prestigious competitions like TechnoXian with my maze-solving robot and Escalade with
              my stair-climbing robot. Currently, I'm building a new project every month to continuously improve my
              skills and explore new frontiers in AI and robotics.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding or building robots, you'll find me exploring the latest research papers, experimenting
              with new technologies, or sharing my knowledge with the tech community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Brain className="text-purple-400" size={32} />
                  <div>
                    <h3 className="text-xl font-semibold text-white">AI/ML Focus</h3>
                    <p className="text-gray-400">Computer Vision & Machine Learning</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Cpu className="text-cyan-400" size={32} />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Robotics</h3>
                    <p className="text-gray-400">Embedded Systems & Automation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Trophy className="text-yellow-400" size={32} />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Competitions</h3>
                    <p className="text-gray-400">TechnoXian & Escalade Participant</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
