import Header from '../components/Header';
import Footer from '../components/Footer';
import RoadmapCard from '../components/RoadmapCard';

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