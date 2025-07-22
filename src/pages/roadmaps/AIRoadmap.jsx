import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AIRoadmap() {
  const [activeTab, setActiveTab] = useState('overview');

  const navigate = useNavigate();

  const content = {
    overview: {
      title: "About Artificial Intelligence",
      description: [
        "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. AI encompasses machine learning, deep learning, natural language processing, computer vision, and more.",
        "AI is transforming industries from healthcare to finance by enabling machines to perform complex tasks like pattern recognition, decision making, and predictions with high accuracy.",
        "Modern AI leverages large datasets and powerful computing to create models that can perform tasks typically requiring human intelligence, while continuously improving through experience."
      ],
      keyComponents: [
        "Machine learning algorithms",
        "Neural networks and deep learning",
        "Natural language processing",
        "Computer vision",
        "Reinforcement learning"
      ]
    },
    roadmap: [
      {
        title: "Foundations",
        steps: [
          "Mathematics: Linear algebra, calculus, statistics",
          "Python programming for AI",
          "Data structures and algorithms",
          "Basic machine learning concepts",
          "Data preprocessing techniques"
        ]
      },
      {
        title: "Core Machine Learning",
        steps: [
          "Supervised learning (regression, classification)",
          "Unsupervised learning (clustering, dimensionality reduction)",
          "Model evaluation and validation",
          "Feature engineering",
          "Ensemble methods"
        ]
      },
      {
        title: "Deep Learning",
        steps: [
          "Neural networks fundamentals",
          "Convolutional Neural Networks (CNNs)",
          "Recurrent Neural Networks (RNNs)",
          "Transformers and attention mechanisms",
          "Transfer learning"
        ]
      },
      {
        title: "Advanced Topics",
        steps: [
          "Natural Language Processing (NLP)",
          "Computer vision",
          "Reinforcement learning",
          "Generative models (GANs, VAEs)",
          "AI ethics and responsible AI"
        ]
      }
    ],
    resources: [
      {
        category: "Foundational Courses",
        icon: "🎓",
        items: [
          { 
            name: "Andrew Ng's ML Course", 
            url: "https://www.coursera.org/learn/machine-learning",
            description: "The classic introduction to machine learning"
          },
          { 
            name: "Fast.ai Practical DL", 
            url: "https://course.fast.ai",
            description: "Top-down approach to deep learning"
          },
          { 
            name: "Deep Learning Specialization", 
            url: "https://www.coursera.org/specializations/deep-learning",
            description: "Deep learning fundamentals by Andrew Ng"
          }
        ]
      },
      {
        category: "Essential Libraries",
        icon: "📚",
        items: [
          { 
            name: "TensorFlow Documentation", 
            url: "https://www.tensorflow.org/learn",
            description: "Official TensorFlow learning resources"
          },
          { 
            name: "PyTorch Tutorials", 
            url: "https://pytorch.org/tutorials/",
            description: "Official PyTorch tutorials"
          },
          { 
            name: "scikit-learn Guides", 
            url: "https://scikit-learn.org/stable/user_guide.html",
            description: "Machine learning with scikit-learn"
          }
        ]
      },
      {
        category: "Advanced Learning",
        icon: "🚀",
        items: [
          { 
            name: "Stanford CS224N (NLP)", 
            url: "http://web.stanford.edu/class/cs224n/",
            description: "Natural Language Processing with Deep Learning"
          },
          { 
            name: "Deep Reinforcement Learning", 
            url: "https://spinningup.openai.com/",
            description: "OpenAI's RL educational resource"
          },
          { 
            name: "MIT Intro to Deep Learning", 
            url: "http://introtodeeplearning.com/",
            description: "MIT's introductory deep learning course"
          }
        ]
      },
      {
        category: "Research & Papers",
        icon: "🔬",
        items: [
          { 
            name: "arXiv AI Papers", 
            url: "https://arxiv.org/list/cs.AI/recent",
            description: "Latest AI research papers"
          },
          { 
            name: "Papers With Code", 
            url: "https://paperswithcode.com/",
            description: "AI papers with code implementations"
          },
          { 
            name: "Distill.pub", 
            url: "https://distill.pub/",
            description: "Clear explanations of ML concepts"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">

                              {/* Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-primary-600 mb-6 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back 
          </button>

          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Artificial Intelligence Roadmap</h1>
            <p className="text-xl text-gray-600">
              A structured guide to mastering AI and machine learning
            </p>
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
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Components</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {content.overview.keyComponents.map((component, index) => (
                    <li key={index} className="text-gray-700">{component}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">AI Development Process</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Workflow Stages</h4>
                    <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                      <li>Problem definition and data collection</li>
                      <li>Data preprocessing and exploration</li>
                      <li>Model selection and training</li>
                      <li>Evaluation and optimization</li>
                      <li>Deployment and monitoring</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Common Challenges</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Data quality and quantity</li>
                      <li>Model interpretability</li>
                      <li>Computational resources</li>
                      <li>Bias and fairness</li>
                      <li>Production deployment</li>
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
                  <div className="bg-red-600 p-4">
                    <h2 className="text-xl font-bold text-white">{section.title}</h2>
                  </div>
                  <div className="p-6">
                    <ol className="list-decimal pl-5 space-y-3">
                      {section.steps.map((step, i) => (
                        <li key={i} className="text-gray-700">
                          {step}
                          {index === 0 && i === 0 && (
                            <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">Begin here</span>
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
            <div className="grid md:grid-cols-2 gap-6">
              {content.resources.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <div className="bg-red-600 p-4 flex items-center">
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
                              <span className="font-medium text-red-600 group-hover:text-red-800">
                                {item.name}
                              </span>
                              <svg className="w-4 h-4 ml-2 text-gray-400 group-hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          )}

          {/* AI Applications Section */}
          <div className="mt-12 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">AI Applications</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { 
                  name: "Natural Language Processing", 
                  icon: "💬", 
                  tech: "Chatbots, Translation",
                  examples: "GPT-3, BERT, Alexa"
                },
                { 
                  name: "Computer Vision", 
                  icon: "👁️", 
                  tech: "Image Recognition",
                  examples: "Facial recognition, Medical imaging"
                },
                { 
                  name: "Autonomous Systems", 
                  icon: "🚗", 
                  tech: "Self-driving cars",
                  examples: "Tesla, Waymo"
                },
                { 
                  name: "Recommendation Systems", 
                  icon: "👍", 
                  tech: "Personalization",
                  examples: "Netflix, Amazon"
                },
                { 
                  name: "Generative AI", 
                  icon: "🎨", 
                  tech: "Content Creation",
                  examples: "DALL-E, Midjourney"
                },
                { 
                  name: "Predictive Analytics", 
                  icon: "🔮", 
                  tech: "Forecasting",
                  examples: "Stock market, Weather"
                },
                { 
                  name: "Robotics", 
                  icon: "🤖", 
                  tech: "Automation",
                  examples: "Industrial robots"
                },
                { 
                  name: "Healthcare AI", 
                  icon: "🏥", 
                  tech: "Medical diagnosis",
                  examples: "Radiology, Drug discovery"
                }
              ].map((app, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors hover:shadow-sm"
                >
                  <div className="text-2xl mb-2">{app.icon}</div>
                  <h3 className="font-medium text-gray-800">{app.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{app.tech}</p>
                  <p className="text-xs text-gray-500 mt-2">Examples: {app.examples}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Career Path Section */}
          <div className="mt-12 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">AI Career Paths</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Machine Learning Engineer",
                  salary: "$110k - $180k",
                  skills: ["ML algorithms", "Python", "TensorFlow/PyTorch"],
                  companies: ["Tech companies", "AI startups"]
                },
                {
                  title: "Data Scientist",
                  salary: "$90k - $160k",
                  skills: ["Statistics", "Data analysis", "Visualization"],
                  companies: ["Finance", "Healthcare", "E-commerce"]
                },
                {
                  title: "AI Research Scientist",
                  salary: "$120k - $200k+",
                  skills: ["Advanced math", "Research methods", "Paper writing"],
                  companies: ["Research labs", "Universities", "Big tech"]
                }
              ].map((path, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg text-red-600 mb-2">{path.title}</h3>
                  <p className="text-gray-700 mb-3"><span className="font-medium">Salary Range:</span> {path.salary}</p>
                  <div className="mb-3">
                    <h4 className="font-medium text-gray-800 mb-1">Key Skills:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-700">
                      {path.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Common Employers:</h4>
                    <p className="text-sm text-gray-700">{path.companies.join(", ")}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}