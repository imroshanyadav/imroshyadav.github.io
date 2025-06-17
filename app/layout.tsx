import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Roshan Yadav - AI/ML & Robotics Engineer",
  description:
    "Portfolio of Roshan Yadav, an AI/ML and Robotics enthusiast showcasing innovative projects like EcoSnap X, Labour Chokk, and competition robots.",
  keywords: "AI, Machine Learning, Robotics, Computer Vision, Python, Arduino, Portfolio, Engineer",
  authors: [{ name: "Roshan Yadav" }],
  openGraph: {
    title: "Roshan Yadav - Turning Ideas into AI-driven Reality",
    description: "Explore innovative AI/ML and Robotics projects by Roshan Yadav",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
