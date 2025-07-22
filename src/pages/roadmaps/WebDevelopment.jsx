import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function WebDevelopment() {

    const navigate = useNavigate();
    const [expandedStack, setExpandedStack] = useState(null);

    const toggleStack = (index) => {
      setExpandedStack(expandedStack === index ? null : index);
    };

  const stacks = [
    {
      name: "MERN Stack",
      description: "Modern JavaScript full-stack solution using MongoDB, Express, React, and Node.js",
      pros: [
        "Full JavaScript/JSON development",
        "React's component-based architecture",
        "Strong ecosystem and community support",
        "Good for real-time applications"
      ],
      cons: [
        "MongoDB may not suit all data needs",
        "React has a steep learning curve",
        "Can become overly complex for small projects"
      ],
      roadmap: [
        "HTML5 & CSS3 Fundamentals",
        "JavaScript ES6+ (Async/Await, Promises)",
        "React.js (Components, Hooks, State Management)",
        "Node.js & Express (REST APIs, Middleware)",
        "MongoDB (CRUD, Aggregation, Indexing)",
        "Authentication (JWT, OAuth)",
        "Deployment (Vercel, Heroku, AWS)"
      ],
      recommendations: [
        "Start with Create React App for beginners",
        "Use Mongoose for MongoDB object modeling",
        "Learn React Router for navigation",
        "Practice building full CRUD applications"
      ]
    },
    {
      name: "MEAN Stack",
      description: "Traditional JavaScript stack with MongoDB, Express, Angular, and Node.js",
      pros: [
        "Structured framework (Angular)",
        "TypeScript support out of the box",
        "Good for enterprise applications",
        "Two-way data binding simplifies code"
      ],
      cons: [
        "Steeper learning curve than MERN",
        "More opinionated structure",
        "Heavier than React for frontend"
      ],
      roadmap: [
        "TypeScript Fundamentals",
        "Angular (Components, Services, RxJS)",
        "Node.js & Express",
        "MongoDB with Mongoose",
        "Angular Forms and Validation",
        "State Management (NgRx)",
        "Deployment Strategies"
      ],
      recommendations: [
        "Use Angular CLI for project setup",
        "Learn RxJS for reactive programming",
        "Implement lazy loading for large apps",
        "Consider server-side rendering"
      ]
    },
    {
      name: "LAMP Stack",
      description: "Traditional stack with Linux, Apache, MySQL, and PHP",
      pros: [
        "Proven and stable technology",
        "Great for content-heavy sites",
        "Massive WordPress compatibility",
        "Excellent documentation"
      ],
      cons: [
        "Not as modern as JavaScript stacks",
        "PHP can lead to messy code if not structured",
        "Page reloads (non-SPA experience)"
      ],
      roadmap: [
        "PHP Fundamentals (OOP, Composer)",
        "MySQL Database Design",
        "Apache/Nginx Configuration",
        "Laravel or Symfony Framework",
        "Template Engines (Blade, Twig)",
        "Security Best Practices",
        "Server Management Basics"
      ],
      recommendations: [
        "Use Laravel for modern PHP development",
        "Implement Eloquent ORM for databases",
        "Learn Docker for local environment setup",
        "Cache aggressively for performance"
      ]
    },
    {
      name: "JAMstack",
      description: "Modern architecture based on JavaScript, APIs, and Markup",
      pros: [
        "Excellent performance and security",
        "Great developer experience",
        "Scalable with CDNs",
        "Decoupled frontend/backend"
      ],
      cons: [
        "Not ideal for highly dynamic apps",
        "Requires more services/integrations",
        "Complex state management"
      ],
      roadmap: [
        "Static Site Generators (Next.js, Gatsby)",
        "Headless CMS (Contentful, Sanity)",
        "Serverless Functions (Vercel, Netlify)",
        "GraphQL or REST API Consumption",
        "Authentication (Auth0, Firebase)",
        "CDN and Edge Network Concepts",
        "Performance Optimization"
      ],
      recommendations: [
        "Start with Next.js for SSR/SSG",
        "Use Vercel for seamless deployment",
        "Learn GraphQL with Apollo Client",
        "Implement ISR (Incremental Static Regeneration)"
      ]
    },
    // Python Fullstack (Django/Flask)
    {
      name: "Python Fullstack",
      description: "Versatile stack using Python for both backend and frontend (with JS frameworks)",
      pros: [
        "Clean and readable syntax",
        "Strong data science integration",
        "Django's batteries-included approach",
        "Flask's microframework flexibility"
      ],
      cons: [
        "Frontend still requires JavaScript",
        "Not as performant as compiled languages",
        "Fewer Python frontend options"
      ],
      roadmap: [
        "Python Fundamentals (OOP, Virtualenv)",
        "Django (Models, Views, Templates) OR Flask",
        "Database (PostgreSQL with SQLAlchemy/ORM)",
        "REST APIs (Django REST Framework)",
        "Frontend Integration (React/Vue with Python backend)",
        "Authentication (Django Auth, JWT)",
        "Deployment (AWS, PythonAnywhere)"
      ],
      recommendations: [
        "Start with Django for structured learning",
        "Use Django REST Framework for APIs",
        "Learn to combine with React/Vue frontends",
        "Practice deployment early with PythonAnywhere"
      ]
    },

    // Java Fullstack (Spring)
    {
      name: "Java Fullstack",
      description: "Enterprise-grade stack using Spring Boot and Thymeleaf/React",
      pros: [
        "Excellent performance and scalability",
        "Strong typing reduces runtime errors",
        "Comprehensive Spring ecosystem",
        "Ideal for large-scale applications"
      ],
      cons: [
        "Steeper learning curve",
        "More verbose than other languages",
        "Slower development cycle"
      ],
      roadmap: [
        "Java Fundamentals (OOP, Collections)",
        "Spring Boot (Dependency Injection)",
        "Database (JPA/Hibernate with MySQL/PostgreSQL)",
        "REST APIs (Spring MVC)",
        "Frontend (Thymeleaf or React integration)",
        "Security (Spring Security, OAuth2)",
        "Deployment (Docker, Kubernetes)"
      ],
      recommendations: [
        "Use Spring Initializr for project setup",
        "Learn about microservices architecture",
        "Implement proper exception handling",
        "Study design patterns for Java"
      ]
    },

    // Ruby on Rails
    {
      name: "Ruby on Rails",
      description: "Productivity-focused stack emphasizing convention over configuration",
      pros: [
        "Rapid development with scaffolding",
        "Strong community and gems ecosystem",
        "Excellent documentation",
        "Great for startups and MVPs"
      ],
      cons: [
        "Performance limitations at scale",
        "Magic can obscure what's happening",
        "Less flexible than microframeworks"
      ],
      roadmap: [
        "Ruby Fundamentals (Blocks, Modules)",
        "Rails MVC Architecture",
        "ActiveRecord ORM",
        "RESTful Routing",
        "Frontend (ERB, Stimulus, Hotwire)",
        "Testing (RSpec, Capybara)",
        "Deployment (Heroku, Render)"
      ],
      recommendations: [
        "Follow Rails conventions strictly",
        "Use Devise for authentication",
        "Learn about background jobs (Sidekiq)",
        "Practice test-driven development"
      ]
    },

    // .NET Stack
    {
      name: ".NET Stack",
      description: "Microsoft's ecosystem with C# and ASP.NET Core",
      pros: [
        "Excellent performance and tooling",
        "Strong corporate support",
        "Cross-platform with .NET Core",
        "Great for Windows-based applications"
      ],
      cons: [
        "Historically Windows-centric",
        "Less startup community than OSS stacks",
        "C# learning curve for beginners"
      ],
      roadmap: [
        "C# Fundamentals (LINQ, Async)",
        "ASP.NET Core MVC",
        "Entity Framework Core",
        "Web APIs (Controller vs Minimal)",
        "Frontend (Razor Pages or React/Angular)",
        "Authentication (Identity Framework)",
        "Deployment (Azure, IIS)"
      ],
      recommendations: [
        "Use Visual Studio for better experience",
        "Learn about middleware pipeline",
        "Implement repository pattern",
        "Explore Blazor for C# frontend"
      ]
    }
  ];

    const resources = [
    // Fundamentals
    { name: "MDN Web Docs", category: "Reference", url: "https://developer.mozilla.org" },
    { name: "freeCodeCamp", category: "Interactive", url: "https://freecodecamp.org" },
    { name: "The Odin Project", category: "Full Curriculum", url: "https://theodinproject.com" },
    
    // Frontend
    { name: "Frontend Masters", category: "Courses", url: "https://frontendmasters.com" },
    { name: "JavaScript.info", category: "Modern JS", url: "https://javascript.info" },
    { name: "React Documentation", category: "Library", url: "https://react.dev" },
    
    // Backend
    { name: "Node.js Docs", category: "Runtime", url: "https://nodejs.org/docs" },
    { name: "Django Docs", category: "Framework", url: "https://docs.djangoproject.com" },
    { name: "Spring Guides", category: "Java", url: "https://spring.io/guides" },
    
    // Databases
    { name: "SQLZoo", category: "SQL Practice", url: "https://sqlzoo.net" },
    { name: "MongoDB University", category: "NoSQL", url: "https://university.mongodb.com" },
    
    // DevOps
    { name: "Docker Getting Started", category: "Containers", url: "https://docker-curriculum.com" },
    { name: "Kubernetes Basics", category: "Orchestration", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics" },
    
    // Specialized
    { name: "Next.js Learn", category: "React Framework", url: "https://nextjs.org/learn" },
    { name: "Ruby Koans", category: "Ruby Practice", url: "https://github.com/edgecase/ruby_koans" },
    { name: ".NET Learn", category: "Microsoft", url: "https://dotnet.microsoft.com/learn" },
    
    // Community
    { name: "Dev.to", category: "Articles", url: "https://dev.to" },
    { name: "Stack Overflow", category: "Q&A", url: "https://stackoverflow.com" },
    { name: "CodeNewbie Podcast", category: "Inspiration", url: "https://www.codenewbie.org/podcast" }
  ];

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

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white p-8 mb-12">
            <h1 className="text-4xl font-bold mb-4">Web Development Roadmap</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Master full-stack development with comprehensive technology comparisons
            </p>
          </div>

          {/* Web Development Fundamentals */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Web Development</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Frontend Development</h3>
                <p className="text-gray-600">
                  The client-side part that users interact with directly. Focuses on:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>HTML/CSS for structure and styling</li>
                    <li>JavaScript for interactivity</li>
                    <li>Frameworks like React, Vue, Angular</li>
                    <li>Responsive and accessible design</li>
                  </ul>
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Backend Development</h3>
                <p className="text-gray-600">
                  The server-side logic that powers applications. Includes:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Server programming (Node.js, Python, Java)</li>
                    <li>Databases and data modeling</li>
                    <li>APIs and authentication</li>
                    <li>Performance and security</li>
                  </ul>
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Fullstack Development</h3>
                <p className="text-gray-600">
                  Combining both frontend and backend skills:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>End-to-end application building</li>
                    <li>Understanding complete data flow</li>
                    <li>DevOps and deployment knowledge</li>
                    <li>Architecture decision making</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          {/* Stack Comparison - Compressed Cards */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Technology Stack Comparison</h2>
            <div className="space-y-4">
              {stacks.map((stack, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                  <button 
                    onClick={() => toggleStack(index)}
                    className={`w-full p-6 text-left flex justify-between items-center ${expandedStack === index ? 'bg-gray-50' : ''}`}
                  >
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-4 ${
                        index % 4 === 0 ? 'bg-blue-500' : 
                        index % 4 === 1 ? 'bg-amber-500' : 
                        index % 4 === 2 ? 'bg-emerald-500' : 'bg-purple-500'
                      }`}></div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{stack.name}</h3>
                        <p className="text-gray-600">{stack.description}</p>
                      </div>
                    </div>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transform transition-transform ${expandedStack === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {expandedStack === index && (
                    <div className="px-6 pb-6 space-y-6">
                      <div className="grid md:grid-cols-2 gap-6 pt-4">
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2">Advantages</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {stack.pros.map((pro, i) => (
                              <li key={i} className="text-gray-700">{pro}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">Challenges</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {stack.cons.map((con, i) => (
                              <li key={i} className="text-gray-700">{con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Learning Path</h4>
                        <ol className="list-decimal pl-5 space-y-2 marker:font-medium">
                          {stack.roadmap.map((step, i) => (
                            <li key={i} className="text-gray-700 pl-2">{step}</li>
                          ))}
                        </ol>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Pro Tips</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {stack.recommendations.map((tip, i) => (
                            <li key={i} className="text-blue-800">{tip}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
              {/* General Web Dev Tips */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Essential Web Development Concepts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Core Technologies</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>HTTP/HTTPS and REST principles</li>
                  <li>Responsive design (Flexbox, Grid)</li>
                  <li>Browser DevTools mastery</li>
                  <li>Web accessibility standards</li>
                  <li>Cross-browser compatibility</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Career Advice</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Build portfolio projects (3-5 quality apps)</li>
                  <li>Contribute to open source</li>
                  <li>Learn debugging and problem-solving</li>
                  <li>Understand basic DevOps concepts</li>
                  <li>Practice technical communication</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Resource Section */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Learning Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, i) => (
                <a 
                  key={i}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gray-200 rounded-lg p-4 hover:border-blue-400 transition-colors group"
                >
                  <h3 className="font-medium text-blue-600 group-hover:text-blue-800 truncate">{resource.name}</h3>
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full mt-1">
                    {resource.category}
                  </span>
                </a>
              ))}
            </div>
          </div>

                    {/* Career Path Section */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Career Pathways</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Frontend Specialist",
                  path: "HTML/CSS → JavaScript → React → State Management → Performance",
                  salary: "$75k-$150k"
                },
                {
                  title: "Backend Engineer",
                  path: "APIs → Databases → Authentication → Caching → Microservices",
                  salary: "$85k-$160k"
                },
                {
                  title: "Fullstack Developer",
                  path: "Frontend + Backend → DevOps → Architecture → Team Leadership",
                  salary: "$90k-$170k"
                }
              ].map((path, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-lg text-gray-800">{path.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{path.path}</p>
                  <p className="text-green-600 font-medium mt-3">Avg. Salary: {path.salary}</p>
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