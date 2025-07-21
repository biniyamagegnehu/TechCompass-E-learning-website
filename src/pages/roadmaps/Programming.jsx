import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function BeginnerProgrammingRoadmap() {
  const [activeTab, setActiveTab] = useState('overview');

  const content = {
    overview: {
      title: "Welcome to Programming!",
      description: [
        "Programming is simply giving instructions to computers to perform tasks. Like learning any new language, it takes practice but opens doors to creating websites, apps, games, and more!",
        "This roadmap is designed for complete beginners - no math or tech knowledge required. We'll start from the absolute basics in a fun, approachable way.",
        "Programming teaches problem-solving skills that are valuable in any career. Remember, every expert programmer started exactly where you are now!"
      ],
      keyBenefits: [
        "Create things that solve real problems",
        "Improve logical thinking skills",
        "Work in tech (or just understand it better)",
        "Automate boring tasks",
        "Have fun bringing ideas to life"
      ],
      mythBusters: [
        "❌ You need to be good at math → Basic math is enough for most programming",
        "❌ You need a college degree → Many programmers are self-taught",
        "❌ It's too hard to learn → Like cooking, start with simple recipes first",
        "❌ You need a fancy computer → A basic laptop is perfect for learning"
      ]
    },
    roadmap: [
      {
        title: "First Steps",
        steps: [
          "Understand what programming is (writing instructions for computers)",
          "Try simple visual programming with Scratch or Blockly",
          "Learn basic computer concepts (files, folders, browsers)",
          "Practice typing (important for coding speed)",
          "Set up your coding environment"
        ]
      },
      {
        title: "Programming Basics",
        steps: [
          "Variables (containers for information)",
          "Data types (text, numbers, true/false)",
          "Basic operations (math, text combination)",
          "Simple input/output (ask questions, show results)",
          "Your first real program (like a number guessing game)"
        ]
      },
      {
        title: "Core Concepts",
        steps: [
          "Conditionals (if/else decisions)",
          "Loops (repeating actions)",
          "Functions (reusable code blocks)",
          "Lists/Arrays (collections of data)",
          "Debugging (fixing errors in code)"
        ]
      },
      {
        title: "Next Steps",
        steps: [
          "Choose your first real language (Python recommended)",
          "Work on small projects (calculator, to-do list)",
          "Learn about version control (saving code versions)",
          "Explore different programming areas",
          "Join beginner-friendly coding communities"
        ]
      }
    ],
    resources: [
      {
        category: "Absolute Beginner Courses",
        icon: "👶",
        items: [
          { 
            name: "Code.org Beginner Courses", 
            url: "https://code.org/learn",
            description: "Fun, game-like intro to programming concepts"
          },
          { 
            name: "Scratch by MIT", 
            url: "https://scratch.mit.edu/",
            description: "Drag-and-drop visual programming for complete beginners"
          },
          { 
            name: "Hour of Code Activities", 
            url: "https://hourofcode.com/us/learn",
            description: "One-hour intro tutorials in various languages"
          }
        ]
      },
      {
        category: "First Programming Language",
        icon: "🐍",
        items: [
          { 
            name: "Python for Beginners", 
            url: "https://www.python.org/about/gettingstarted/",
            description: "Official Python beginner's guide"
          },
          { 
            name: "Learn Python in 10 Minutes", 
            url: "https://www.stavros.io/tutorials/python/",
            description: "Quick taste of Python syntax"
          },
          { 
            name: "Automate the Boring Stuff", 
            url: "https://automatetheboringstuff.com/",
            description: "Practical beginner Python projects"
          }
        ]
      },
      {
        category: "Practice Platforms",
        icon: "🎮",
        items: [
          { 
            name: "CodeCombat", 
            url: "https://codecombat.com/",
            description: "Learn by playing a coding game"
          },
          { 
            name: "Grasshopper", 
            url: "https://grasshopper.app/",
            description: "Mobile-friendly JavaScript intro"
          },
          { 
            name: "Blockly Games", 
            url: "https://blockly.games/",
            description: "Visual programming puzzles"
          }
        ]
      },
      {
        category: "Help & Community",
        icon: "👥",
        items: [
          { 
            name: "r/learnprogramming", 
            url: "https://www.reddit.com/r/learnprogramming/",
            description: "Supportive beginner community"
          },
          { 
            name: "FreeCodeCamp Forum", 
            url: "https://forum.freecodecamp.org/",
            description: "Friendly Q&A for new coders"
          },
          { 
            name: "CodeNewbie Podcast", 
            url: "https://www.codenewbie.org/podcast",
            description: "Stories from other beginners"
          }
        ]
      }
    ],
    firstPrograms: [
      {
        name: "Hello World",
        description: "Display a welcome message",
        code: `print("Hello World!")`,
        languages: ["Python", "JavaScript", "Ruby"]
      },
      {
        name: "Greeting Machine",
        description: "Ask for a name and greet personally",
        code: `name = input("What's your name? ")
print(f"Hello {name}!")`,
        languages: ["Python"]
      },
      {
        name: "Number Doubler",
        description: "Double any number you enter",
        code: `number = float(input("Enter a number: "))
print(f"Double is: {number * 2}")`,
        languages: ["Python"]
      },
      {
        name: "Simple Quiz",
        description: "Ask questions and check answers",
        code: `score = 0
answer = input("What's 2+2? ")
if answer == "4":
    print("Correct!")
    score += 1
else:
    print("Wrong!")
print(f"Your score: {score}")`,
        languages: ["Python"]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="text-blue-600">Absolute Beginner's</span> Programming Roadmap
            </h1>
            <p className="text-xl text-gray-600">
              Start from zero and learn to code in simple, friendly steps
            </p>
          </div>

          {/* Encouragement Banner */}
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-8 rounded">
            <p className="font-medium">💡 Remember:</p>
            <p>Programming is a skill anyone can learn with practice. If you can follow a recipe, you can learn to code!</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 mb-8">
            {['overview', 'roadmap', 'resources'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium text-sm capitalize ${activeTab === tab 
                  ? 'text-primary-600 border-b-2 border-primary-600' 
                  : 'text-gray-500 hover:text-gray-700'}`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Content Sections */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{content.overview.title}</h2>
                {content.overview.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                ))}
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Learn Programming?</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {content.overview.keyBenefits.map((benefit, index) => (
                    <li key={index} className="text-gray-700">{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Programming Myths Busted</h3>
                <ul className="space-y-3">
                  {content.overview.mythBusters.map((myth, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="mr-2">{myth.split('→')[0]}</span>
                      <span className="font-medium">{myth.split('→')[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Learning Tips</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Do These:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Start with small, simple projects</li>
                      <li>Practice a little every day (15-30 mins)</li>
                      <li>Celebrate small wins</li>
                      <li>Ask questions when stuck</li>
                      <li>Experiment and break things!</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Avoid These:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Comparing yourself to experienced coders</li>
                      <li>Trying to learn everything at once</li>
                      <li>Copying code without understanding</li>
                      <li>Giving up when things get confusing</li>
                      <li>Thinking you're "not technical enough"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'roadmap' && (
            <div className="space-y-6">
              {content.roadmap.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <div className="bg-blue-600 p-4">
                    <h2 className="text-xl font-bold text-white">{section.title}</h2>
                  </div>
                  <div className="p-6">
                    <ol className="list-decimal pl-5 space-y-3">
                      {section.steps.map((step, i) => (
                        <li key={i} className="text-gray-700">
                          {step}
                          {index === 0 && i === 0 && (
                            <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">Start here</span>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {content.resources.map((category, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                    <div className="bg-blue-600 p-4 flex items-center">
                      <span className="text-xl mr-3">{category.icon}</span>
                      <h2 className="text-lg font-bold text-white">{category.category}</h2>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-4">
                        {category.items.map((item, i) => (
                          <li key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                            <a 
                              href={item.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex flex-col group"
                            >
                              <div className="flex items-center">
                                <span className="font-medium text-blue-600 group-hover:text-blue-800">
                                  {item.name}
                                </span>
                                <svg className="w-4 h-4 ml-2 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* First Programs Section */}
              <div className="mt-8 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Try These First Programs</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {content.firstPrograms.map((program, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-lg text-blue-600 mb-2">{program.name}</h3>
                      <p className="text-gray-700 mb-3">{program.description}</p>
                      <div className="bg-gray-800 rounded p-3 mb-3 overflow-x-auto">
                        <pre className="text-gray-200 text-sm">
                          <code>{program.code}</code>
                        </pre>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {program.languages.map((lang, i) => (
                          <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Learning Path Section */}
          <div className="mt-12 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Learning Journey</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">First Month</h3>
                  <p className="text-gray-700">
                    Focus on understanding basic concepts through visual tools like Scratch. 
                    Complete 5-10 small exercises. Don't worry about "real" coding yet.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Months 2-3</h3>
                  <p className="text-gray-700">
                    Start with Python basics. Build 3-5 tiny programs (calculator, quiz). 
                    Learn to Google errors - this is normal for all programmers!
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Months 4-6</h3>
                  <p className="text-gray-700">
                    Build slightly larger projects. Start learning version control with Git. 
                    Join a beginner coding community for support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Beginner Questions Answered</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Q: How do I know if programming is for me?</h3>
                <p className="text-gray-700">
                  Try it for at least 20 hours before deciding. The beginning is the hardest part - 
                  if you enjoy solving puzzles or creating things, you'll likely enjoy programming.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Q: What if I get stuck?</h3>
                <p className="text-gray-700">
                  Everyone gets stuck - it's part of learning! Break problems into smaller pieces, 
                  search online, or ask in beginner communities. Sticking with hard problems is how you improve.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Q: How much time should I spend learning?</h3>
                <p className="text-gray-700">
                  15-30 minutes daily is better than 5 hours once a week. Consistency matters more than 
                  total hours. Even pros learn new things daily!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}