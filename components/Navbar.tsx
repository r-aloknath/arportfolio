'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 nav-wrap" aria-label="Main navigation">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-2xl tracking-tighter t1" title="Aloknath Rath - Tech Consultant Home">
          AR<span className="ta">.</span>
        </Link>

        <div className="hidden sm:flex items-center gap-8 text-sm" role="navigation" aria-label="Main menu">
          <a href="#services" className="nav-link transition-colors text-lg" title="View consulting services">
            Services
          </a>
          <a href="#skills" className="nav-link transition-colors text-lg" title="View technical skills">
            Skills
          </a>
          <a href="#experience" className="nav-link transition-colors text-lg" title="View work experience">
            Work
          </a>
          <a href="#work" className="nav-link transition-colors text-lg" title="View selected projects">
            Projects
          </a>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="mailto:aloknath.ar@gmail.com"
            className="hire-btn text-sm font-medium px-4 py-2 rounded-md transition-opacity"
            title="Send email to hire for consulting"
            rel="noopener noreferrer"
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  );
}