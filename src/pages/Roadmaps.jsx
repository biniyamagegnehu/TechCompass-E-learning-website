import Header from '../components/Header';
import Footer from '../components/Footer';
import RoadmapCard from '../components/RoadmapCard';

const roadmaps = [
  {
  id: 'beginner-programming',
  title: 'Absolute Beginner Programming',
  description: 'Start coding from scratch with no experience needed',
  icon: '👶',
  steps: 4,
  duration: '3-5 months',
  bgColor: 'bg-gradient-to-br from-blue-400 to-blue-500',
  borderColor: 'border-blue-300'
},
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
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description: 'Build cross-platform mobile apps',
    icon: '📱',
    steps: 6,
    duration: '4-6 months',
    bgColor: 'bg-gradient-to-br from-purple-500 to-purple-600',
    borderColor: 'border-purple-400'
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Master AI and machine learning',
    icon: '🤖',
    steps: 7,
    duration: '6-8 months',
    bgColor: 'bg-gradient-to-br from-red-500 to-red-600',
    borderColor: 'border-red-400'
  },
  {
    id: 'iot',
    title: 'IoT Development',
    description: 'Build Internet of Things solutions',
    icon: '🌐',
    steps: 5,
    duration: '3-5 months',
    bgColor: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
    borderColor: 'border-cyan-400'
  }
];

export default function Roadmaps() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Learning <span className="text-blue-600">Roadmaps</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Click on any roadmap to explore detailed learning paths
            </p>
          </div>

          {/* Roadmap Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmaps.map((roadmap) => (
              <div key={roadmap.id} className="relative">
                <RoadmapCard roadmap={roadmap} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}