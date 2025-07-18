import { Link } from 'react-router-dom';

export default function RoadmapCard({ roadmap }) {
  return (
    <Link 
      to={`/roadmaps/${roadmap.id}`}
      className="group block h-full relative"
    >
      {/* Main Card Container */}
      <div className={`
        h-full flex flex-col rounded-xl overflow-hidden 
        shadow-lg hover:shadow-xl transition-all duration-300
        border-t-4 ${roadmap.borderColor}
        transform hover:-translate-y-1.5
        relative z-10
      `}>
        {/* Card Header */}
        <div className={`${roadmap.bgColor} p-6 flex-grow`}>
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-4">{roadmap.icon}</span>
            <div>
              <h2 className="text-2xl font-bold text-white">{roadmap.title}</h2>
              <p className="text-blue-100 mt-1">{roadmap.description}</p>
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="bg-white bg-opacity-20 px-6 py-4 backdrop-blur-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="
                bg-white text-blue-600 text-sm font-medium
                px-3 py-1 rounded-full
                flex items-center
                group-hover:bg-blue-50 group-hover:text-blue-700
                transition-colors
              ">
                Explore
                <svg 
                  className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
            <div className="flex space-x-4 text-white text-sm">
              <span className="flex items-center bg-white bg-opacity-10 px-2 py-1 rounded">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                {roadmap.steps} steps
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Clickable Indicator - Now Visible! */}
      <div className="
        absolute inset-0 rounded-xl
        border-2 border-transparent
        group-hover:border-white group-hover:border-opacity-50
        transition-all duration-300
        z-20 pointer-events-none
        shadow-[0_0_0_3px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_0_4px_rgba(255,255,255,0.4)]
      "></div>

      {/* Pulsing Animation on Hover */}
      <div className="
        absolute inset-0 rounded-xl
        bg-white bg-opacity-0
        group-hover:bg-opacity-10
        transition-all duration-500
        z-0 pointer-events-none
        group-hover:scale-105
      "></div>
    </Link>
  );
}