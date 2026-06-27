import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact Us' },
];

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  const scrolledNav = darkMode
    ? 'bg-gray-900/97 shadow-lg shadow-black/30'
    : 'bg-white/97 shadow-lg shadow-gray-200/60';
  const transparentNav = 'bg-transparent';
  const showScrolled = !isHome || scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${showScrolled ? scrolledNav : transparentNav}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <NavLink to="/" className="flex items-center gap-3 group flex-shrink-0">
            <img
              src="/sr_logo.jpg"
              alt="SR Engineering Dudley LTD"
              className={`transition-all duration-300 object-contain ${showScrolled ? 'h-11 w-11' : 'h-14 w-14'} ${!showScrolled && !darkMode ? 'brightness-0 invert' : ''}`}
            />
            <div className="hidden sm:block">
              <p
                className={`font-black text-base leading-tight tracking-tight transition-colors ${showScrolled ? (darkMode ? 'text-white' : 'text-[#1a2e5c]') : 'text-white'}`}
              >
                SR Engineering
              </p>
              <p
                className={`text-xs font-semibold leading-none transition-colors ${showScrolled ? (darkMode ? 'text-blue-400' : 'text-blue-600') : 'text-blue-300'}`}
              >
                Dudley LTD
              </p>
            </div>
          </NavLink>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : showScrolled
                        ? darkMode
                          ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                        : 'text-white/90 hover:bg-white/15 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className={`ml-2 p-2.5 rounded-lg transition-colors ${
                showScrolled
                  ? darkMode
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <NavLink
              to="/contact"
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-blue-500/30"
            >
              Get a Quote
            </NavLink>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className={`p-2 rounded-lg ${
                showScrolled
                  ? darkMode
                    ? 'bg-gray-800 text-yellow-400'
                    : 'bg-gray-100 text-gray-600'
                  : 'bg-white/10 text-white'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className={`p-2 rounded-lg ${
                showScrolled
                  ? darkMode
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-100 text-gray-700'
                  : 'bg-white/10 text-white'
              }`}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-100'}`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `block py-2.5 px-4 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : darkMode
                      ? 'text-gray-300 hover:bg-gray-800'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="block mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-3 rounded-xl text-center transition-colors"
          >
            Get a Free Quote
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
