import React, { useState, useEffect, useRef } from 'react';
import { SITE } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-3 sm:px-6 pt-2.5 sm:pt-4">
      <div
        className={`glass max-w-7xl mx-auto rounded-2xl px-4 sm:px-6 md:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'py-2 sm:py-2.5 !bg-[#111113]/90 shadow-lg shadow-black/40' : 'py-3 sm:py-3.5'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="/"
          className="text-white text-xl sm:text-2xl font-black tracking-tight uppercase group flex items-center shrink-0"
        >
          <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">
            {SITE.name.charAt(0)}
          </span>
          <span className="group-hover:text-red-500 transition-colors duration-300">
            {SITE.name.slice(1)}.
          </span>
        </a>

        {/* Desktop & Tablet Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="relative text-xs lg:text-sm font-bold text-gray-400 uppercase tracking-[0.12em] lg:tracking-[0.15em] transition-colors duration-300 hover:text-white group py-1"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 ease-out group-hover:w-full shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <div className="hidden sm:block">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="glass-red inline-flex items-center justify-center px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-white text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden glass-chip p-2 rounded-xl text-gray-200 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-red-500" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden mt-2 max-w-7xl mx-auto rounded-2xl glass glass-strong p-4 sm:p-6 flex flex-col gap-3 animate-in fade-in slide-in-from-top-3 duration-200 border border-white/10 shadow-2xl shadow-red-950/40"
        >
          <div className="flex flex-col divide-y divide-white/5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="flex items-center justify-between py-3 text-sm font-bold uppercase tracking-[0.15em] text-gray-300 hover:text-white hover:text-red-400 transition-colors group"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-red-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>

          <div className="pt-2 sm:hidden">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="glass-red w-full flex items-center justify-center py-3 rounded-xl text-white text-xs font-bold uppercase tracking-wider text-center"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
