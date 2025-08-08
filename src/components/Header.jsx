import React from 'react';

const Header = ({ currentPage, setCurrentPage }) => {
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <header className="h-20 sticky top-0 z-50 bg-[#0B0D39]">
      <div className="max-w-7xl px-6 mx-auto h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation('promotion')}
              className="text-white text-xl font-semibold"
            >
              [Finsweet]
            </button>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => handleNavigation('promotion')}
              className={`text-white font-medium transition duration-300 hover:text-[#FF6B6B] ${
                currentPage === 'promotion' ? 'text-[#FF6B6B]' : ''
              }`}
            >
              Promotion
            </button>
            <button 
              onClick={() => handleNavigation('home')}
              className={`text-white font-medium transition duration-300 hover:text-[#FF6B6B] ${
                currentPage === 'home' ? 'text-[#FF6B6B]' : ''
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('about')}
              className={`text-white font-medium transition duration-300 hover:text-[#FF6B6B] ${
                currentPage === 'about' ? 'text-[#FF6B6B]' : ''
              }`}
            >
              About us
            </button>
            <button 
              onClick={() => handleNavigation('pricing')}
              className={`text-white font-medium transition duration-300 hover:text-[#FF6B6B] ${
                currentPage === 'pricing' ? 'text-[#FF6B6B]' : ''
              }`}
            >
              Pricing
            </button>
            <button 
              onClick={() => handleNavigation('work')}
              className={`text-white font-medium transition duration-300 hover:text-[#FF6B6B] ${
                currentPage === 'work' ? 'text-[#FF6B6B]' : ''
              }`}
            >
              Work
            </button>
            <button 
              onClick={() => handleNavigation('blog')}
              className={`text-white font-medium transition duration-300 hover:text-[#FF6B6B] ${
                currentPage === 'blog' ? 'text-[#FF6B6B]' : ''
              }`}
            >
              Blog
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="bg-[#0B0D39] text-white px-4 py-2 rounded-md border border-white hover:bg-white hover:text-[#0B0D39] transition duration-300"
            >
              Contact us
            </button>
          </nav>
          <div className="md:hidden">
            <button className="text-white hover:text-[#FF6B6B] transition duration-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
