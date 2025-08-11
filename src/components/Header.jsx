import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="h-20 sticky top-0 z-50 bg-[#0B0D39]">
      <div className="max-w-7xl px-6 mx-auto h-full">
        <div className="flex justify-between items-center h-full relative">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-semibold">
              [Finsweet]
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-white font-medium transition duration-300 hover:text-[#FF6B6B] ${
                location.pathname === '/' ? 'text-[#FF6B6B] underline underline-offset-8' : ''
              }`}
            >
              Promotion
            </Link>
            <Link
              to="/home"
              className={`text-white font-medium transition duration-300 hover:text-[#FF6B6B] ${
                location.pathname === '/home' ? 'text-[#FF6B6B] underline underline-offset-8' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-white font-medium transition duration-300 hover:text-[#FF6B6B] ${
                location.pathname === '/about' ? 'text-[#FF6B6B] underline underline-offset-8' : ''
              }`}
            >
              About us
            </Link>
            <Link
              to="/pricing"
              className={`text-white font-medium transition duration-300 hover:text-[#FF6B6B] ${
                location.pathname === '/pricing' ? 'text-[#FF6B6B] underline underline-offset-8' : ''
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/work"
              className={`text-white font-medium transition duration-300 hover:text-[#FF6B6B] ${
                location.pathname === '/work' ? 'text-[#FF6B6B] underline underline-offset-8' : ''
              }`}
            >
              Work
            </Link>
            <Link
              to="/blog"
              className={`text-white font-medium transition duration-300 hover:text-[#FF6B6B] ${
                location.pathname === '/blog' ? 'text-[#FF6B6B] underline underline-offset-8' : ''
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="bg-[#0B0D39] text-white px-4 py-2 rounded-md border border-white hover:bg-white hover:text-[#0B0D39] transition duration-300"
            >
              Contact us
            </Link>
          </nav>
          <div className="md:hidden">
            <button aria-label="Menu" onClick={() => setOpen(!open)} className="text-white hover:text-[#FF6B6B] transition duration-300">
              {open ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          {open && (
            <div className="absolute top-full left-0 right-0 bg-[#0B0D39] border-t border-white/10 md:hidden">
              <div className="px-6 py-4 flex flex-col space-y-3">
                <Link onClick={() => setOpen(false)} to="/" className={`text-white ${location.pathname === '/' ? 'text-[#FF6B6B]' : ''}`}>Promotion</Link>
                <Link onClick={() => setOpen(false)} to="/home" className={`text-white ${location.pathname === '/home' ? 'text-[#FF6B6B]' : ''}`}>Home</Link>
                <Link onClick={() => setOpen(false)} to="/about" className={`text-white ${location.pathname === '/about' ? 'text-[#FF6B6B]' : ''}`}>About us</Link>
                <Link onClick={() => setOpen(false)} to="/pricing" className={`text-white ${location.pathname === '/pricing' ? 'text-[#FF6B6B]' : ''}`}>Pricing</Link>
                <Link onClick={() => setOpen(false)} to="/work" className={`text-white ${location.pathname === '/work' ? 'text-[#FF6B6B]' : ''}`}>Work</Link>
                <Link onClick={() => setOpen(false)} to="/blog" className={`text-white ${location.pathname === '/blog' ? 'text-[#FF6B6B]' : ''}`}>Blog</Link>
                <Link onClick={() => setOpen(false)} to="/contact" className="text-white border border-white rounded-md px-4 py-2 text-center">Contact us</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
