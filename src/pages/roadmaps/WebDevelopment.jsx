import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function WebDevelopment() {
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
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white p-8 mb-12">
            <h1 className="text-4xl font-bold mb-4">Web Development Roadmap</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Comprehensive guide to becoming a full-stack developer with comparisons of popular tech stacks
            </p>
          </div>

          {/* Stack Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {stacks.map((stack, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      index === 0 ? 'bg-blue-500' : 
                      index === 1 ? 'bg-red-500' : 
                      index === 2 ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                    <h2 className="text-2xl font-bold text-gray-800">{stack.name}</h2>
                  </div>
                  <p className="text-gray-600 mb-4">{stack.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-green-600 mb-2">Advantages</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {stack.pros.map((pro, i) => (
                          <li key={i} className="text-gray-700">{pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-red-600 mb-2">Challenges</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {stack.cons.map((con, i) => (
                          <li key={i} className="text-gray-700">{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2">Learning Path</h3>
                  <ol className="list-decimal pl-5 space-y-1 text-sm">
                    {stack.roadmap.map((step, i) => (
                      <li key={i} className="text-gray-700">{step}</li>
                    ))}
                  </ol>
                </div>

                <div className="bg-blue-50 px-6 py-4 border-t border-blue-100">
                  <h3 className="font-semibold text-blue-700 mb-2">Pro Tips</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {stack.recommendations.map((tip, i) => (
                      <li key={i} className="text-blue-800">{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Recommended Learning Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "MDN Web Docs", category: "Reference", url: "https://developer.mozilla.org" },
                { name: "Frontend Masters", category: "Courses", url: "https://frontendmasters.com" },
                { name: "The Odin Project", category: "Full Curriculum", url: "https://theodinproject.com" },
                { name: "freeCodeCamp", category: "Interactive", url: "https://freecodecamp.org" },
                { name: "Codecademy", category: "Beginners", url: "https://codecademy.com" },
                { name: "Next.js Learn", category: "Modern JS", url: "https://nextjs.org/learn" }
              ].map((resource, i) => (
                <a 
                  key={i}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gray-200 rounded-lg p-4 hover:border-blue-400 transition-colors group"
                >
                  <h3 className="font-medium text-blue-600 group-hover:text-blue-800">{resource.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{resource.category}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}