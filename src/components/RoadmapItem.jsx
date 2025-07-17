import { useState } from 'react'

export default function RoadmapItem({ title, steps }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      <div
        className={`collapsible-content ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-4 bg-white">
          <ol className="list-decimal list-inside space-y-2">
            {steps.map((step, index) => (
              <li key={index} className="text-gray-700">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}