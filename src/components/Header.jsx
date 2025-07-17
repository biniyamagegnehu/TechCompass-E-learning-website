import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-500">TechCompass</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-neutral hover:text-primary-500 font-medium">Home</Link>
            <Link to="/roadmaps" className="text-neutral hover:text-primary-500 font-medium">Roadmaps</Link>
            <Link to="/platforms" className="text-neutral hover:text-primary-500 font-medium">Platforms</Link>
            <Link to="/about" className="text-neutral hover:text-primary-500 font-medium">About</Link>
          </nav>
          <button className="md:hidden text-neutral">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}