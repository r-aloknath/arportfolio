export default function Footer() {
  return (
    <footer 
      className="foot max-w-4xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
      itemScope
      itemType="https://schema.org/Person"
    >
      <span itemProp="name">
        <strong className="t1 font-medium">Aloknath Rath</strong> — Independent Tech Consultant ·
        <span itemProp="workLocation"> Bengaluru / Odisha, India</span>
      </span>
      <meta itemProp="jobTitle" content="Independent Tech Consultant" />
      <meta itemProp="email" content="aloknath.ar@gmail.com" />
      <meta itemProp="url" content="https://aloknath.dev" />
      <nav className="flex gap-5" aria-label="Contact links">
        <a
          href="https://linkedin.com/in/aloknath-rath"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors"
          title="LinkedIn profile"
        >
          LinkedIn
        </a>
        <a 
          href="mailto:aloknath.ar@gmail.com" 
          className="transition-colors"
          title="Send email"
        >
          Email
        </a>
        <a 
          href="tel:+917749927175" 
          className="transition-colors"
          title="Call phone number"
        >
          +91 77499 27175
        </a>
      </nav>
    </footer>
  );
}