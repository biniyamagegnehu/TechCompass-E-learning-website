import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600">TechCompass</span>
          </Link>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary-600 font-medium">Home</Link>
            <Link to="/roadmaps" className="text-gray-600 hover:text-primary-600 font-medium">Roadmaps</Link>
            <Link to="/platforms" className="text-gray-600 hover:text-primary-600 font-medium">Platforms</Link>
            <Link to="/about" className="text-gray-600 hover:text-primary-600 font-medium">About</Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu - Conditionally rendered */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <Link 
              to="/" 
              className="block py-2 text-gray-600 hover:text-primary-600 font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/roadmaps" 
              className="block py-2 text-gray-600 hover:text-primary-600 font-medium"
              onClick={toggleMenu}
            >
              Roadmaps
            </Link>
            <Link 
              to="/platforms" 
              className="block py-2 text-gray-600 hover:text-primary-600 font-medium"
              onClick={toggleMenu}
            >
              Platforms
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-gray-600 hover:text-primary-600 font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}