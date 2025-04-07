import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className={`text-2xl font-bold ${
              isScrolled ? 'text-coffee-800 hover:text-coffee-600' : 'text-white hover:text-coffee-200'
            }`}>
              <a href="https://beresau.co.il/?gad_source=1&gclid=Cj0KCQjw782_BhDjARIsABTv_JAE97wGb1SwevwQJPWSasXnKjq76C3qRucJpGrpFcSw4qvufUoqyLMaArXCEALw_wcB">
                קפה ברסאו
              </a>
            </span>
          </div>
         
          {/* Mobile Contact Link */}
          <div className="md:hidden">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium ${
                isScrolled ? 'text-coffee-800 hover:text-coffee-600' : 'text-white hover:text-coffee-200'
              }`}
            >
              צור קשר
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                to="story"
                spy={true}
                smooth={true}
                duration={1000}
                className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium ${
                  isScrolled ? 'text-coffee-800 hover:text-coffee-600' : 'text-white hover:text-coffee-200'
                }`}
              >
                הסיפור של אברהם
              </Link>
             
              <Link
                to="features"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium ${
                  isScrolled ? 'text-coffee-800 hover:text-coffee-600' : 'text-white hover:text-coffee-200'
                }`}
              >
                למה אנחנו
              </Link>
             
              <Link
                to="testimonial"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium ${
                  isScrolled ? 'text-coffee-800 hover:text-coffee-600' : 'text-white hover:text-coffee-200'
                }`}
              >
                מה אמרו עלינו
              </Link>
             
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium ${
                  isScrolled ? 'text-coffee-800 hover:text-coffee-600' : 'text-white hover:text-coffee-200'
                }`}
              >
                דברו איתנו
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;