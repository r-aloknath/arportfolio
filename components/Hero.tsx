export default function Hero() {
  return (
    <section 
      className="max-w-4xl mx-auto px-6 pt-24 pb-16"
      aria-label="Hero section - About me"
    >
      <div className="flex items-center gap-2 mb-7">
        <span className="status-dot w-2 h-2 rounded-full inline-block" aria-hidden="true"></span>
        <span className="text-xs font-semibold tracking-widest uppercase t3">
          Available for consulting engagements
        </span>
      </div>

      <h1 className="font-display font-bold leading-none tracking-tightest text-5xl sm:text-6xl lg:text-7xl mb-6 t1">
        I build <span className="ta">fast,</span>
        <br />
        scalable web
        <br />
        systems.
      </h1>

      <p className="t2 text-lg leading-relaxed max-w-xl mb-8">
        Independent full-stack consultant specialising in <strong>Angular</strong>, <strong>React</strong>, and <strong>Node.js</strong>. I help
        product teams move faster — from architecture decisions to shipping production-ready
        features.
      </p>

      <nav className="flex flex-wrap items-center gap-4" aria-label="Call to action buttons">
        <a
          href="mailto:aloknath.ar@gmail.com"
          className="btn-primary text-sm font-medium px-6 py-3 rounded-md transition-opacity"
          rel="noopener noreferrer"
        >
          Work with me
        </a>
        <a
          href="#work"
          className="btn-outline text-sm px-6 py-3 rounded-md transition-colors"
        >
          View experience →
        </a>
      </nav>

      <div className="mt-14 pt-8 border-t grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div>
          <div className="font-display font-bold text-4xl tracking-tighter t1">4+</div>
          <div className="text-xs t3 mt-1">Years shipping products</div>
        </div>
        <div>
          <div className="font-display font-bold text-4xl tracking-tighter t1">25+</div>
          <div className="text-xs t3 mt-1">APIs designed &amp; secured</div>
        </div>
        <div>
          <div className="font-display font-bold text-4xl tracking-tighter t1">40%</div>
          <div className="text-xs t3 mt-1">Faster releases via CI/CD</div>
        </div>
        <div>
          <div className="font-display font-bold text-4xl tracking-tighter t1">10k+</div>
          <div className="text-xs t3 mt-1">Mobile users served</div>
        </div>
      </div>
    </section>
  );
}