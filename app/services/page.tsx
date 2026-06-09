import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Consulting Services | Full-Stack Tech Consultant | Aloknath Rath',
  description:
    'Professional consulting services: Frontend Architecture, Full-Stack Development, CI/CD & DevOps, Mobile Development, Technical Leadership, and Performance Optimization.',
  keywords: 'consulting services, tech consulting, angular development, react consulting, nodejs services, web development',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Frontend Architecture',
      icon: '🏗️',
      description: 'Build scalable, maintainable frontend systems',
      details: [
        'Micro-frontend setup and implementation',
        'Reusable component library design',
        'Performance profiling and optimization',
        'Angular / React / Next.js systems',
      ],
    },
    {
      title: 'Full-Stack Development',
      icon: '⚡',
      description: 'End-to-end feature delivery with quality',
      details: [
        'RESTful API design and implementation',
        'JWT & OAuth 2.0 authentication',
        'Database design and optimization',
        'Clean frontend-backend integration',
      ],
    },
    {
      title: 'CI/CD & DevOps',
      icon: '🚀',
      description: 'Automate deployments and streamline workflows',
      details: [
        'GitHub Actions pipeline setup',
        'Jenkins automation and configuration',
        'Docker containerization',
        'Multi-environment deployments',
      ],
    },
    {
      title: 'Mobile Development',
      icon: '📱',
      description: 'Cross-platform apps for iOS and Android',
      details: [
        'React Native application development',
        'Ionic cross-platform solutions',
        'Offline storage and syncing',
        'Push notifications integration',
      ],
    },
    {
      title: 'Technical Leadership',
      icon: '👥',
      description: 'Guide teams and establish engineering excellence',
      details: [
        'Code review processes',
        'Coding standards and best practices',
        'Team mentoring and training',
        'Sprint planning and documentation',
      ],
    },
    {
      title: 'Performance & Audit',
      icon: '⚙️',
      description: 'Optimize and ensure quality',
      details: [
        'Bundle analysis and reduction',
        'Load time optimization',
        'WCAG accessibility compliance',
        'Cross-browser compatibility testing',
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main role="main">
        <section className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="font-display font-bold text-5xl tracking-tightest mb-4 t1">
            Consulting Services
          </h1>
          <p className="t2 text-lg mb-12 max-w-2xl">
            I offer comprehensive consulting services across the full stack. Whether you need hands-on development, 
            technical guidance, or team leadership, I work collaboratively to deliver results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {services.map((service, idx) => (
              <article
                key={idx}
                className="card p-6"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h2 className="font-semibold text-xl t1 mb-2" itemProp="name">
                  {service.title}
                </h2>
                <p className="t2 text-sm mb-4" itemProp="description">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-xs t3 flex items-start gap-2">
                      <span className="text-ta mt-1">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <meta itemProp="provider" content="Aloknath Rath" />
                <meta itemProp="areaServed" content="Worldwide" />
              </article>
            ))}
          </div>

          <section className="mt-16 pt-12 border-t" style={{ borderColor: 'var(--c-border)' }}>
            <h2 className="font-display font-bold text-3xl tracking-tighter t1 mb-6">
              How I Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg t1 mb-3">Flexible Engagement Models</h3>
                <p className="t2 text-sm leading-relaxed">
                  I'm open to various engagement models including full-time contracts, part-time consulting, 
                  project-based work, or hourly consulting for specific tasks.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg t1 mb-3">Communication & Collaboration</h3>
                <p className="t2 text-sm leading-relaxed">
                  Clear communication is essential. I work closely with your team, provide regular updates, 
                  and ensure alignment with your business goals.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg t1 mb-3">Quality First</h3>
                <p className="t2 text-sm leading-relaxed">
                  Every deliverable is production-ready, tested, and documented. I follow industry best practices 
                  and coding standards.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg t1 mb-3">Knowledge Transfer</h3>
                <p className="t2 text-sm leading-relaxed">
                  I focus on building your team's capabilities through mentoring, documentation, and knowledge sharing 
                  throughout the engagement.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12 pt-12 border-t text-center" style={{ borderColor: 'var(--c-border)' }}>
            <h2 className="font-display font-bold text-2xl t1 mb-4">
              Ready to get started?
            </h2>
            <p className="t2 mb-6 max-w-md mx-auto">
              Let's discuss how I can help your team move faster and build better systems.
            </p>
            <a
              href="mailto:aloknath.ar@gmail.com"
              className="btn-primary text-sm font-medium px-6 py-3 rounded-md transition-opacity"
            >
              Contact me
            </a>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
