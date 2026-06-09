import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Aloknath Rath | Independent Tech Consultant',
  description:
    'Learn about Aloknath Rath, a full-stack tech consultant with 4+ years of experience building scalable systems with Angular, React, and Node.js.',
  keywords: 'about aloknath, tech consultant bio, full-stack developer experience',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main role="main">
        <section className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="font-display font-bold text-5xl tracking-tightest mb-8 t1">
            About me
          </h1>

          <article className="prose prose-sm max-w-2xl space-y-6 text-base leading-relaxed">
            <p className="t2">
              I'm Aloknath Rath, an independent full-stack tech consultant specializing in building fast, scalable web systems. 
              With 4+ years of hands-on experience, I help product teams move faster—from architecture decisions to shipping production-ready features.
            </p>

            <h2 className="font-display font-bold text-2xl tracking-tighter t1 mt-8">
              My Background
            </h2>
            <p className="t2">
              My journey started in 2022 as a Frontend Developer Intern at TECHBORN, where I built 15+ responsive UI components. 
              Since then, I've worked across multiple roles and organizations, progressively taking on more responsibility in full-stack development, 
              architectural decisions, and technical leadership.
            </p>

            <h2 className="font-display font-bold text-2xl tracking-tighter t1 mt-8">
              What I Do
            </h2>
            <p className="t2">
              I specialize in:
            </p>
            <ul className="list-disc list-inside space-y-2 t2">
              <li><strong>Frontend Architecture</strong> — Micro-frontend patterns, component libraries, and performance optimization</li>
              <li><strong>Full-Stack Development</strong> — RESTful APIs, database design, and clean integrations</li>
              <li><strong>DevOps & CI/CD</strong> — GitHub Actions, Docker, and automated deployment pipelines</li>
              <li><strong>Mobile Development</strong> — Cross-platform apps with React Native and Ionic</li>
              <li><strong>Technical Leadership</strong> — Code reviews, mentoring, and establishing engineering standards</li>
            </ul>

            <h2 className="font-display font-bold text-2xl tracking-tighter t1 mt-8">
              Why Work With Me
            </h2>
            <p className="t2">
              I don't just write code—I help teams think about systems. Whether you need a senior hands-on developer, 
              a technical review of your codebase, or someone to own a product end-to-end, I bring:
            </p>
            <ul className="list-disc list-inside space-y-2 t2">
              <li>Proven track record of 35% performance improvements and 40% faster release cycles</li>
              <li>Experience scaling systems to serve 10,000+ users</li>
              <li>Strong mentoring background with junior and mid-level developers</li>
              <li>Real-world expertise across education, retail, enterprise, and social platforms</li>
            </ul>

            <h2 className="font-display font-bold text-2xl tracking-tighter t1 mt-8">
              Let's Connect
            </h2>
            <p className="t2">
              I'm available for freelance and contract consulting engagements. Interested in working together? 
              <a 
                href="mailto:aloknath.ar@gmail.com" 
                className="font-medium ta ml-1 hover:underline"
              >
                Send me an email
              </a>.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
