export default function Services() {
  const services = [
    {
      title: 'Frontend Architecture',
      desc: 'Micro-frontend setup, component libraries, performance profiling, and Angular / React / Next.js systems built to last.',
    },
    {
      title: 'Full-Stack Development',
      desc: 'End-to-end feature delivery — RESTful APIs, JWT auth, database design, and clean frontend integration.',
    },
    {
      title: 'CI/CD & DevOps',
      desc: 'GitHub Actions, Jenkins pipelines, Docker containerisation, and automated deployments across staging and production.',
    },
    {
      title: 'Mobile Development',
      desc: 'Cross-platform apps using Ionic and React Native with offline storage, push notifications, and native feature access.',
    },
    {
      title: 'Technical Leadership',
      desc: 'Code reviews, coding standards, team mentoring, sprint planning, and documentation that actually gets used.',
    },
    {
      title: 'Performance & Audit',
      desc: 'Bundle analysis, load time reduction, accessibility (WCAG), and cross-browser compatibility — no regression left behind.',
    },
  ];

  return (
    <section id="services" className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-xs font-semibold tracking-widest uppercase ta mb-4">What I do</p>
      <h2 className="font-display font-bold text-3xl tracking-tighter t1 mb-3">
        How I can help your team
      </h2>
      <p className="t2 text-base leading-relaxed mb-8 max-w-lg">
        Whether you need senior hands, a technical review, or someone to own a product end-to-end —
        I work across the full stack.
      </p>

      <div className="svc-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="svc-cell p-6 transition-colors"
            style={{
              borderBottom: idx < 3 ? '1px solid var(--c-border)' : undefined,
              borderRight:
                idx % 3 !== 2 && idx !== services.length - 1 ? '1px solid var(--c-border)' : undefined,
            }}
          >
            <div className="text-2xl mb-3 ta">⬡</div>
            <div className="font-semibold text-sm t1 mb-2">{service.title}</div>
            <div className="text-xs t2 leading-relaxed">{service.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}