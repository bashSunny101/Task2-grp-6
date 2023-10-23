import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-white text-3xl font-semibold">
            Logo
          </a>

          {/* Mobile Menu Button */}
          <button
            className="block lg:hidden text-white"
            onClick={toggleMobileMenu}
          >
            &#8801
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              className="bg-white text-gray-800 border border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search"
            />
            <button className="absolute top-2 right-3 text-gray-500">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          {/* Profile Button with User Icon */}
          <button className="text-white flex items-center space-x-2">
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </button>

          <a href="/bookmarks" className="text-white">
            Bookmarks
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <a href="/profile" className="block p-3 text-white">
            <FontAwesomeIcon icon={faUser} /> Profile
          </a>
          <a href="/bookmarks" className="block p-3 text-white">
            Bookmarks
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
