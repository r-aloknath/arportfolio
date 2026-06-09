'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 nav-wrap">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-base tracking-tighter t1">
          AR<span className="ta">.</span>
        </Link>

        <div className="hidden sm:flex items-center gap-8 text-sm">
          <a href="#services" className="nav-link transition-colors">
            Services
          </a>
          <a href="#skills" className="nav-link transition-colors">
            Skills
          </a>
          <a href="#work" className="nav-link transition-colors">
            Work
          </a>
          <a href="#projects" className="nav-link transition-colors">
            Projects
          </a>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="mailto:aloknath.ar@gmail.com"
            className="hire-btn text-sm font-medium px-4 py-2 rounded-md transition-opacity"
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  );
}