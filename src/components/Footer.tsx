import React from 'react';
import { SITE, SOCIALS } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="glass-bar w-full text-white py-10 sm:py-14 px-4 sm:px-6 md:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        <div className="flex flex-col items-center md:items-start gap-1">
          <a href="/" className="text-xl sm:text-2xl font-black tracking-tight uppercase flex items-center">
            <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">{SITE.name.charAt(0)}</span>
            <span>{SITE.name.slice(1)}.</span>
          </a>
          <p className="text-[10px] sm:text-[11px] text-gray-400 font-mono tracking-widest uppercase text-center md:text-left">
            {SITE.role}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {SOCIALS.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-chip px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-all hover:scale-105"
            >
              {social.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-end gap-2.5 sm:gap-3">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[11px] sm:text-xs text-gray-400 uppercase tracking-widest font-bold">
            <a href="#about" className="hover:text-red-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-red-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-red-500 transition-colors">Projects</a>
            <a href="#services" className="hover:text-red-500 transition-colors">Services</a>
            <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
          </div>
          <div className="text-[10px] sm:text-[11px] text-gray-500 font-mono uppercase tracking-wider text-center md:text-right">
            &copy; {CURRENT_YEAR} {SITE.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
