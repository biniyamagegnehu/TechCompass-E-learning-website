import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function IoTRoadmap() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const content = {
    overview: {
      title: "About IoT Development",
      description: [
        "The Internet of Things (IoT) refers to the network of physical devices embedded with sensors, software, and connectivity that enables them to collect and exchange data. IoT bridges the physical and digital worlds, creating smart environments.",
        "IoT systems typically consist of devices/sensors, connectivity, data processing, and user interfaces. Applications range from smart homes and wearables to industrial automation and smart cities.",
        "IoT development requires knowledge of hardware, networking, cloud computing, and data analysis. Security and scalability are critical considerations in IoT solutions."
      ],
      keyComponents: [
        "Embedded systems programming",
        "Sensor technologies",
        "Wireless communication protocols",
        "Cloud platforms for IoT",
        "Data processing and analytics"
      ]
    },
    roadmap: [
      {
        title: "Foundations",
        steps: [
          "Electronics fundamentals",
          "Programming basics (C/C++, Python)",
          "Microcontroller architectures",
          "Basic sensor integration",
          "Networking concepts"
        ]
      },
      {
        title: "Core IoT Development",
        steps: [
          "IoT communication protocols (MQTT, CoAP)",
          "Cloud IoT platforms (AWS IoT, Azure IoT)",
          "Edge computing concepts",
          "Data collection and processing",
          "Basic device security"
        ]
      },
      {
        title: "Advanced Concepts",
        steps: [
          "IoT security best practices",
          "Large-scale device management",
          "Time-series databases",
          "Machine learning at the edge",
          "Digital twins"
        ]
      },
      {
        title: "Specializations",
        steps: [
          "Industrial IoT (IIoT)",
          "Smart home automation",
          "Wearable technology",
          "Smart city infrastructure",
          "Agricultural IoT"
        ]
      }
    ],
    resources: [
      {
        category: "Official Documentation",
        icon: "📚",
        items: [
          { 
            name: "AWS IoT Core", 
            url: "https://docs.aws.amazon.com/iot/latest/developerguide/what-is-aws-iot.html",
            description: "Amazon's IoT cloud platform docs"
          },
          { 
            name: "Arduino Reference", 
            url: "https://www.arduino.cc/reference/en/",
            description: "Official Arduino programming reference"
          },
          { 
            name: "Raspberry Pi Docs", 
            url: "https://www.raspberrypi.com/documentation/",
            description: "Raspberry Pi hardware and software docs"
          }
        ]
      },
      {
        category: "Learning Platforms",
        icon: "🎓",
        items: [
          { 
            name: "IoT Specialization (Coursera)", 
            url: "https://www.coursera.org/specializations/internet-of-things",
            description: "University of California IoT courses"
          },
          { 
            name: "IoT For Beginners", 
            url: "https://github.com/microsoft/IoT-For-Beginners",
            description: "Microsoft's 12-week IoT curriculum"
          },
          { 
            name: "IoT Programming with Python", 
            url: "https://www.udemy.com/course/iot-programming-with-python/",
            description: "Hands-on IoT course using Python"
          }
        ]
      },
      {
        category: "Hardware Platforms",
        icon: "🛠️",
        items: [
          { 
            name: "Arduino Projects", 
            url: "https://create.arduino.cc/projecthub",
            description: "Community Arduino project ideas"
          },
          { 
            name: "Raspberry Pi Projects", 
            url: "https://projects.raspberrypi.org/",
            description: "Official Raspberry Pi project guides"
          },
          { 
            name: "ESP32 Resources", 
            url: "https://docs.espressif.com/projects/esp-idf/en/latest/esp32/",
            description: "Documentation for ESP32 chips"
          }
        ]
      },
      {
        category: "Communities",
        icon: "👥",
        items: [
          { 
            name: "IoT Subreddit", 
            url: "https://www.reddit.com/r/IOT/",
            description: "Active IoT discussion community"
          },
          { 
            name: "Hackster.io", 
            url: "https://www.hackster.io/",
            description: "IoT project showcase and community"
          },
          { 
            name: "IoT For All", 
            url: "https://www.iotforall.com/",
            description: "IoT news and educational content"
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">IoT Development Roadmap</h1>
            <p className="text-xl text-gray-600">
              A structured guide to building Internet of Things solutions
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
                <h3 className="text-xl font-semibold text-gray-800 mb-4">IoT System Architecture</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">System Layers</h4>
                    <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                      <li>Devices and sensors (edge layer)</li>
                      <li>Connectivity and networking</li>
                      <li>Data processing and storage</li>
                      <li>Applications and user interfaces</li>
                      <li>Security across all layers</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Common Challenges</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Device interoperability</li>
                      <li>Network reliability</li>
                      <li>Data privacy and security</li>
                      <li>Power management</li>
                      <li>Scalability</li>
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
                  <div className="bg-cyan-600 p-4">
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
                  <div className="bg-cyan-600 p-4 flex items-center">
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
                              <span className="font-medium text-cyan-600 group-hover:text-cyan-800">
                                {item.name}
                              </span>
                              <svg className="w-4 h-4 ml-2 text-gray-400 group-hover:text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          {/* IoT Platforms Section */}
          <div className="mt-12 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">IoT Platforms & Technologies</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { 
                  name: "Hardware Platforms", 
                  icon: "💻", 
                  tech: "Arduino, Raspberry Pi, ESP32",
                  description: "Microcontrollers and SBCs"
                },
                { 
                  name: "Cloud Platforms", 
                  icon: "☁️", 
                  tech: "AWS IoT, Azure IoT",
                  description: "Managed IoT cloud services"
                },
                { 
                  name: "Communication", 
                  icon: "📶", 
                  tech: "MQTT, LoRaWAN, Zigbee",
                  description: "IoT networking protocols"
                },
                { 
                  name: "Edge Computing", 
                  icon: "🔌", 
                  tech: "TensorFlow Lite, EdgeX",
                  description: "On-device processing"
                },
                { 
                  name: "Industrial IoT", 
                  icon: "🏭", 
                  tech: "OPC UA, PLCs",
                  description: "Manufacturing and industry"
                },
                { 
                  name: "Smart Home", 
                  icon: "🏠", 
                  tech: "Home Assistant, Matter",
                  description: "Home automation standards"
                },
                { 
                  name: "Wearables", 
                  icon: "⌚", 
                  tech: "BLE, TinyML",
                  description: "Health and fitness devices"
                },
                { 
                  name: "Security", 
                  icon: "🔒", 
                  tech: "TLS, Hardware encryption",
                  description: "IoT security solutions"
                }
              ].map((platform, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors hover:shadow-sm"
                >
                  <div className="text-2xl mb-2">{platform.icon}</div>
                  <h3 className="font-medium text-gray-800">{platform.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{platform.tech}</p>
                  <p className="text-xs text-gray-500 mt-2">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Career Path Section */}
          <div className="mt-12 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">IoT Career Paths</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "IoT Developer",
                  salary: "$80k - $130k",
                  skills: ["Embedded systems", "Python/C++", "IoT protocols"],
                  companies: ["IoT product companies", "Startups"]
                },
                {
                  title: "IoT Solutions Architect",
                  salary: "$100k - $150k",
                  skills: ["System design", "Cloud platforms", "Security"],
                  companies: ["Enterprise IoT", "Consulting firms"]
                },
                {
                  title: "Industrial IoT Engineer",
                  salary: "$90k - $140k",
                  skills: ["PLC programming", "SCADA", "Industry 4.0"],
                  companies: ["Manufacturing", "Energy sector"]
                }
              ].map((path, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg text-cyan-600 mb-2">{path.title}</h3>
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