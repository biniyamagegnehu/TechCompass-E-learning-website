import Header from '../components/Header';
import Footer from '../components/Footer';

const roadmaps = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Become a full-stack web developer',
    icon: '💻',
    steps: 7,
    duration: '4-6 months',
    bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
    borderColor: 'border-blue-400'
  },
  {
    id: 'python',
    title: 'Python Programming',
    description: 'Master Python from basics to advanced',
    icon: '🐍',
    steps: 6,
    duration: '3-5 months',
    bgColor: 'bg-gradient-to-br from-amber-400 to-amber-500',
    borderColor: 'border-amber-300'
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Learn data analysis and visualization',
    icon: '📊',
    steps: 8,
    duration: '5-7 months',
    bgColor: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
    borderColor: 'border-emerald-300'
  }
];

export default function Roadmaps() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Learning <span className="text-blue-600">Roadmaps</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Structured paths to guide your tech journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmaps.map((roadmap) => (
              <a 
                key={roadmap.id}
                href={`/roadmaps/${roadmap.id}`}
                className={`group block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 ${roadmap.borderColor}`}
              >
                <div className={`h-full flex flex-col ${roadmap.bgColor} p-6`}>
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">{roadmap.icon}</span>
                    <h2 className="text-2xl font-bold text-white">{roadmap.title}</h2>
                  </div>
                  <p className="text-blue-100 flex-grow">{roadmap.description}</p>
                  <div className="mt-6 pt-4 border-t border-white border-opacity-20">
                    <div className="flex justify-between text-sm text-white">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        {roadmap.steps} steps
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {roadmap.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}