import { NavLink } from 'react-router-dom';
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
          <NavLink 
            to="/" 
            className="flex items-center space-x-2"
            end
          >
                      <img 
            src="/logo.png" 
            alt="TechCompass Logo" 
            className="h-10 w-auto"
          />
            <span className="text-2xl font-bold text-primary-600">TechCompass</span>
          </NavLink>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `font-medium px-3 py-2 rounded-md ${isActive 
                  ? 'bg-primary-100 text-primary-600' 
                  : 'text-gray-600 hover:text-primary-600'}`
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/roadmaps" 
              className={({ isActive }) => 
                `font-medium px-3 py-2 rounded-md ${isActive 
                  ? 'bg-primary-100 text-primary-600' 
                  : 'text-gray-600 hover:text-primary-600'}`
              }
            >
              Roadmaps
            </NavLink>
            <NavLink 
              to="/platforms" 
              className={({ isActive }) => 
                `font-medium px-3 py-2 rounded-md ${isActive 
                  ? 'bg-primary-100 text-primary-600' 
                  : 'text-gray-600 hover:text-primary-600'}`
              }
            >
              Platforms
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `font-medium px-3 py-2 rounded-md ${isActive 
                  ? 'bg-primary-100 text-primary-600' 
                  : 'text-gray-600 hover:text-primary-600'}`
              }
            >
              About
            </NavLink>
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
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `block py-2 px-3 rounded-md font-medium ${isActive 
                  ? 'bg-primary-100 text-primary-600' 
                  : 'text-gray-600 hover:text-primary-600'}`
              }
              onClick={toggleMenu}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/roadmaps" 
              className={({ isActive }) => 
                `block py-2 px-3 rounded-md font-medium ${isActive 
                  ? 'bg-primary-100 text-primary-600' 
                  : 'text-gray-600 hover:text-primary-600'}`
              }
              onClick={toggleMenu}
            >
              Roadmaps
            </NavLink>
            <NavLink 
              to="/platforms" 
              className={({ isActive }) => 
                `block py-2 px-3 rounded-md font-medium ${isActive 
                  ? 'bg-primary-100 text-primary-600' 
                  : 'text-gray-600 hover:text-primary-600'}`
              }
              onClick={toggleMenu}
            >
              Platforms
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `block py-2 px-3 rounded-md font-medium ${isActive 
                  ? 'bg-primary-100 text-primary-600' 
                  : 'text-gray-600 hover:text-primary-600'}`
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}