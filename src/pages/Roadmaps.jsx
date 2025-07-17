import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RoadmapItem from '../components/RoadmapItem'

export default function Roadmaps() {
  const roadmaps = [
    {
      title: "Web Development Fundamentals",
      steps: [
        "Learn basic HTML - structure of web pages",
        "Learn CSS - styling your web pages",
        "Introduction to JavaScript - making pages interactive",
        "Learn version control with Git and GitHub",
        "Build simple projects to practice (personal website, todo app)",
        "Learn responsive design principles",
        "Deploy your first website"
      ]
    },
    {
      title: "Python for Beginners",
      steps: [
        "Install Python and set up your environment",
        "Learn basic syntax and data types",
        "Understand variables and operators",
        "Learn about loops and conditionals",
        "Work with functions and modules",
        "Introduction to object-oriented programming",
        "Build simple projects (calculator, quiz game)"
      ]
    },
    {
      title: "Getting Started with Data Science",
      steps: [
        "Learn Python basics (see Python roadmap)",
        "Learn basic statistics concepts",
        "Introduction to NumPy and Pandas",
        "Learn data visualization with Matplotlib and Seaborn",
        "Introduction to machine learning concepts",
        "Work with real datasets",
        "Build your first simple predictive model"
      ]
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Learning Roadmaps</h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-8">
              Follow these step-by-step guides to start your journey in tech. Each roadmap is designed with absolute beginners in mind.
            </p>
            
            <div className="max-w-3xl mx-auto">
              {roadmaps.map((roadmap, index) => (
                <RoadmapItem 
                  key={index}
                  title={roadmap.title}
                  steps={roadmap.steps}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}