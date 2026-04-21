import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isOpen: isBookingOpen, openBooking, closeBooking } = useBooking();

  useEffect(() => {
    // Sync with HTML root class for theme toggle
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why us', href: '#why-us' },
    { name: 'Results', href: '#results' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-3">
          <img 
            src="https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768516447/Untitled_design__4__1-removebg-preview_ivfmvy.png" 
            alt="VizX Global Solutions Logo" 
            className="h-8 w-auto object-contain"
          />
          <span className="font-heading font-bold text-xl tracking-tight hidden sm:inline-block">
            VizX Global Solutions
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-base font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Section: CTA & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
          <button 
            onClick={toggleTheme}
            className="p-2 flex-shrink-0 rounded-full hover:bg-secondary focus:outline-none transition-colors border border-transparent hover:border-border"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} className="text-foreground" /> : <Moon size={20} className="text-foreground" />}
          </button>

          <button 
            onClick={openBooking}
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 lg:px-8 text-sm lg:text-base font-bold text-primary-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:-translate-y-0.5 whitespace-nowrap"
          >
            Book a call
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground flex-shrink-0 ml-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background p-4 absolute w-full left-0 right-0 flex flex-col gap-4 shadow-xl z-50">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-foreground p-3 rounded-lg hover:bg-secondary hover:text-primary transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            className="w-full inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-primary-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground cursor-pointer"
            onClick={() => {
              setIsMobileMenuOpen(false);
              openBooking();
            }}
          >
            Book a call
          </button>
        </div>
      )}

    </header>
  );
}

export default Navigation;