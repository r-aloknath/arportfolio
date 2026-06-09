export default function Cta() {
  return (
    <div className="max-w-4xl mx-auto px-6 pb-16">
      <div className="cta-block px-8 py-12 text-center">
        <h2
          className="font-display font-bold text-3xl tracking-tighter mb-3"
          style={{ color: 'var(--c-cta-btn)' }}
        >
          Let's build something together.
        </h2>
        <p
          className="text-sm leading-relaxed mb-8 max-w-md mx-auto"
          style={{ color: 'rgba(160,157,150,.75)' }}
        >
          Have a product to scale, a codebase to modernise, or a team that needs a senior hand?
          I'm open to freelance and contract engagements.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:aloknath.ar@gmail.com"
            className="cta-email text-sm font-medium px-6 py-3 rounded-md transition-opacity inline-block"
          >
            aloknath.ar@gmail.com →
          </a>
          <a
            href="https://linkedin.com/in/aloknath-rath"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-li text-sm px-6 py-3 rounded-md transition-colors inline-block"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </div>
  );
}