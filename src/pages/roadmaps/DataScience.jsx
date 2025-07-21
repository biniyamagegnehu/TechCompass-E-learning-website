import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DataScienceRoadmap() {
  const [activeTab, setActiveTab] = useState('overview');

  const content = {
    overview: {
      title: "About Data Science",
      description: [
        "Data science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.",
        "It combines skills from statistics, computer science, and domain expertise to analyze and interpret complex data. The field has grown significantly with the rise of big data and machine learning.",
        "A typical data science workflow includes data collection, cleaning, exploration, modeling, and visualization to solve real-world problems across industries like healthcare, finance, and technology."
      ],
      keyComponents: [
        "Statistics and probability fundamentals",
        "Programming (Python/R)",
        "Data wrangling and visualization",
        "Machine learning algorithms",
        "Domain knowledge and communication"
      ]
    },
    roadmap: [
      {
        title: "Foundations",
        steps: [
          "Mathematics: Linear algebra, calculus, statistics",
          "Programming: Python basics, NumPy, Pandas",
          "Data visualization: Matplotlib, Seaborn",
          "SQL for data querying",
          "Data cleaning and preprocessing"
        ]
      },
      {
        title: "Core Skills",
        steps: [
          "Exploratory Data Analysis (EDA)",
          "Statistical modeling and hypothesis testing",
          "Feature engineering techniques",
          "Machine learning fundamentals (supervised/unsupervised)",
          "Model evaluation metrics"
        ]
      },
      {
        title: "Advanced Topics",
        steps: [
          "Deep learning (TensorFlow, PyTorch)",
          "Natural Language Processing (NLP)",
          "Big Data tools (Spark, Hadoop)",
          "Cloud platforms for data science (AWS, GCP)",
          "Model deployment and productionization"
        ]
      },
      {
        title: "Specializations",
        steps: [
          "Computer vision and image processing",
          "Time series analysis and forecasting",
          "Recommendation systems",
          "A/B testing and experimentation",
          "MLOps and model monitoring"
        ]
      }
    ],
    resources: [
      {
        category: "Foundational Courses",
        icon: "🎓",
        items: [
          { 
            name: "Data Science Specialization (Coursera)", 
            url: "https://www.coursera.org/specializations/jhu-data-science",
            description: "Johns Hopkins University's comprehensive introduction"
          },
          { 
            name: "Kaggle Learn", 
            url: "https://www.kaggle.com/learn",
            description: "Hands-on micro-courses with real datasets"
          },
          { 
            name: "DataCamp Skill Tracks", 
            url: "https://www.datacamp.com/tracks/skill",
            description: "Interactive learning paths for data science"
          }
        ]
      },
      {
        category: "Essential Tools",
        icon: "🛠️",
        items: [
          { 
            name: "Python Data Science Handbook", 
            url: "https://jakevdp.github.io/PythonDataScienceHandbook/",
            description: "Free online book covering core Python tools"
          },
          { 
            name: "Scikit-learn Documentation", 
            url: "https://scikit-learn.org/stable/",
            description: "Official docs for the most popular ML library"
          },
          { 
            name: "Pandas User Guide", 
            url: "https://pandas.pydata.org/docs/user_guide/index.html",
            description: "Comprehensive guide to data manipulation"
          }
        ]
      },
      {
        category: "Advanced Learning",
        icon: "🚀",
        items: [
          { 
            name: "Fast.ai Practical Deep Learning", 
            url: "https://course.fast.ai",
            description: "Cutting-edge deep learning made accessible"
          },
          { 
            name: "Stanford CS229 Machine Learning", 
            url: "https://cs229.stanford.edu/",
            description: "Stanford's famous machine learning course"
          },
          { 
            name: "Elements of AI", 
            url: "https://course.elementsofai.com",
            description: "Free introduction to AI fundamentals"
          }
        ]
      },
      {
        category: "Community & Practice",
        icon: "👥",
        items: [
          { 
            name: "Kaggle Competitions", 
            url: "https://www.kaggle.com/competitions",
            description: "Real-world data science challenges"
          },
          { 
            name: "Towards Data Science", 
            url: "https://towardsdatascience.com",
            description: "Popular Medium publication for data science"
          },
          { 
            name: "Data Science Central", 
            url: "https://www.datasciencecentral.com",
            description: "Community hub for data professionals"
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
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Data Science Roadmap</h1>
            <p className="text-xl text-gray-600">
              A structured path to becoming a data science professional from fundamentals to advanced specialization
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
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Science Process</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Workflow Stages</h4>
                    <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                      <li>Problem definition and business understanding</li>
                      <li>Data collection and cleaning</li>
                      <li>Exploratory analysis and feature engineering</li>
                      <li>Model building and validation</li>
                      <li>Deployment, monitoring, and maintenance</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Common Challenges</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Data quality and missing values</li>
                      <li>Feature selection and dimensionality</li>
                      <li>Model interpretability and explainability</li>
                      <li>Production deployment and scalability</li>
                      <li>Maintaining model performance over time</li>
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
                  <div className="bg-primary-600 p-4">
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
                  <div className="bg-primary-600 p-4 flex items-center">
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
                              <span className="font-medium text-primary-600 group-hover:text-primary-800">
                                {item.name}
                              </span>
                              <svg className="w-4 h-4 ml-2 text-gray-400 group-hover:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          {/* Data Science Tools Section */}
          <div className="mt-12 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Essential Data Science Tools</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { 
                  name: "Python Libraries", 
                  icon: "🐍", 
                  tech: "Pandas, NumPy, Scikit-learn",
                  description: "Core data manipulation and ML"
                },
                { 
                  name: "Visualization", 
                  icon: "📈", 
                  tech: "Matplotlib, Seaborn, Plotly",
                  description: "Data exploration and presentation"
                },
                { 
                  name: "Big Data", 
                  icon: "⚡", 
                  tech: "Spark, Dask, Hadoop",
                  description: "Processing large datasets"
                },
                { 
                  name: "Deep Learning", 
                  icon: "🧠", 
                  tech: "TensorFlow, PyTorch",
                  description: "Neural networks and AI models"
                },
                { 
                  name: "Notebooks", 
                  icon: "📓", 
                  tech: "Jupyter, Colab",
                  description: "Interactive coding environments"
                },
                { 
                  name: "SQL Databases", 
                  icon: "🗃️", 
                  tech: "PostgreSQL, MySQL",
                  description: "Structured data storage"
                },
                { 
                  name: "Cloud Platforms", 
                  icon: "☁️", 
                  tech: "AWS SageMaker, GCP Vertex",
                  description: "Scalable ML infrastructure"
                },
                { 
                  name: "Version Control", 
                  icon: "🔀", 
                  tech: "Git, DVC",
                  description: "Code and model management"
                }
              ].map((tool, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors hover:shadow-sm"
                >
                  <div className="text-2xl mb-2">{tool.icon}</div>
                  <h3 className="font-medium text-gray-800">{tool.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{tool.tech}</p>
                  <p className="text-xs text-gray-500 mt-2">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Career Path Section */}
          <div className="mt-12 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Data Science Career Paths</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Data Analyst",
                  salary: "$65k - $110k",
                  skills: ["SQL", "Excel", "Visualization"],
                  companies: ["Businesses", "Government", "Startups"]
                },
                {
                  title: "Data Scientist",
                  salary: "$90k - $160k",
                  skills: ["Machine Learning", "Python/R", "Statistics"],
                  companies: ["Tech firms", "Finance", "Healthcare"]
                },
                {
                  title: "ML Engineer",
                  salary: "$110k - $180k",
                  skills: ["Deep Learning", "MLOps", "Cloud"],
                  companies: ["AI startups", "Big tech", "Research"]
                }
              ].map((path, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg text-primary-600 mb-2">{path.title}</h3>
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