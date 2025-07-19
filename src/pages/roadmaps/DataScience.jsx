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
        items: [
          { name: "Data Science Specialization (Coursera)", url: "https://www.coursera.org/specializations/jhu-data-science" },
          { name: "Kaggle Learn", url: "https://www.kaggle.com/learn" }
        ]
      },
      {
        category: "Essential Tools",
        items: [
          { name: "Python Data Science Handbook", url: "https://jakevdp.github.io/PythonDataScienceHandbook/" },
          { name: "Scikit-learn Documentation", url: "https://scikit-learn.org/stable/" }
        ]
      },
      {
        category: "Advanced Learning",
        items: [
          { name: "Fast.ai Practical Deep Learning", url: "https://course.fast.ai" },
          { name: "Stanford CS229 Machine Learning", url: "https://cs229.stanford.edu/" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Data Science Roadmap</h1>
            <p className="text-xl text-gray-600">
              A structured path to becoming a data science professional
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 mb-8">
            {['overview', 'roadmap', 'resources'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium text-sm capitalize ${activeTab === tab 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'}`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Content Sections */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{content.overview.title}</h2>
                {content.overview.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
                ))}
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Components</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {content.overview.keyComponents.map((component, index) => (
                    <li key={index} className="text-gray-700">{component}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Science Process</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Workflow Stages</h4>
                    <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                      <li>Problem definition</li>
                      <li>Data collection and cleaning</li>
                      <li>Exploratory analysis</li>
                      <li>Model building</li>
                      <li>Deployment and monitoring</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Common Challenges</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Data quality issues</li>
                      <li>Feature selection</li>
                      <li>Model interpretability</li>
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
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-gray-800 p-4">
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
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-gray-800 p-4">
                    <h2 className="text-lg font-bold text-white">{category.category}</h2>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {category.items.map((item, i) => (
                        <li key={i}>
                          <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 hover:text-blue-800 hover:underline"
                          >
                            <span>{item.name}</span>
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
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
          <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Essential Data Science Tools</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Python Libraries", icon: "🐍", tech: "Pandas, NumPy, Scikit-learn" },
                { name: "Visualization", icon: "📈", tech: "Matplotlib, Seaborn, Plotly" },
                { name: "Big Data", icon: "⚡", tech: "Spark, Dask, Hadoop" },
                { name: "Deep Learning", icon: "🧠", tech: "TensorFlow, PyTorch" }
              ].map((tool, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="text-2xl mb-2">{tool.icon}</div>
                  <h3 className="font-medium text-gray-800">{tool.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{tool.tech}</p>
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