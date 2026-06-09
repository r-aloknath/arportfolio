export default function Footer() {
  return (
    <footer className="foot max-w-4xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
      <span>
        <strong className="t1 font-medium">Aloknath Rath</strong> — Independent Tech Consultant ·
        Bengaluru / Odisha, India
      </span>
      <div className="flex gap-5">
        <a
          href="https://linkedin.com/in/aloknath-rath"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors"
        >
          LinkedIn
        </a>
        <a href="mailto:aloknath.ar@gmail.com" className="transition-colors">
          Email
        </a>
        <a href="tel:+917749927175" className="transition-colors">
          +91 77499 27175
        </a>
      </div>
    </footer>
  );
}