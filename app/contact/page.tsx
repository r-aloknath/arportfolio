import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact Aloknath Rath | Tech Consultant | Hire Now',
  description:
    'Get in touch with Aloknath Rath for consulting engagements. Available for freelance and contract work. Email, LinkedIn, or phone.',
  keywords: 'contact consultant, hire tech consultant, email contact, freelance developer',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main role="main">
        <section className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="font-display font-bold text-5xl tracking-tightest mb-4 t1">
            Get in touch
          </h1>
          <p className="t2 text-lg mb-12 max-w-2xl">
            I'm available for consulting engagements. Whether you need a senior hands-on developer, 
            a technical review, or leadership for your team, I'd love to chat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Contact Methods */}
            <div>
              <h2 className="font-semibold text-2xl t1 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div
                  itemScope
                  itemType="https://schema.org/ContactPoint"
                >
                  <h3 className="font-semibold text-lg t1 mb-2">Email</h3>
                  <a
                    href="mailto:aloknath.ar@gmail.com"
                    className="text-ta hover:underline text-base"
                    itemProp="email"
                  >
                    aloknath.ar@gmail.com
                  </a>
                  <p className="t3 text-sm mt-1">Preferred method for initial contact</p>
                  <meta itemProp="contactType" content="Work" />
                </div>

                <div
                  itemScope
                  itemType="https://schema.org/ContactPoint"
                >
                  <h3 className="font-semibold text-lg t1 mb-2">Phone</h3>
                  <a
                    href="tel:+917749927175"
                    className="text-ta hover:underline text-base"
                    itemProp="telephone"
                  >
                    +91 77499 27175
                  </a>
                  <p className="t3 text-sm mt-1">Available for calls during business hours IST</p>
                  <meta itemProp="contactType" content="Work" />
                </div>

                <div
                  itemScope
                  itemType="https://schema.org/ContactPoint"
                >
                  <h3 className="font-semibold text-lg t1 mb-2">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/aloknath-rath"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ta hover:underline text-base"
                  >
                    linkedin.com/in/aloknath-rath
                  </a>
                  <p className="t3 text-sm mt-1">Connect for professional inquiries</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg t1 mb-2">Location</h3>
                  <p className="t2 text-base">Bengaluru / Odisha, India</p>
                  <p className="t3 text-sm mt-1">Remote-first, open to timezone flexibility</p>
                </div>
              </div>
            </div>

            {/* Information Card */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="font-semibold text-lg t1 mb-3">Typical Engagement Types</h3>
                <ul className="space-y-2 t2 text-sm">
                  <li className="flex gap-3">
                    <span className="text-ta">✓</span>
                    <span><strong>Freelance Projects</strong> — One-off features or components</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-ta">✓</span>
                    <span><strong>Part-Time Consulting</strong> — 10-20 hours/week ongoing support</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-ta">✓</span>
                    <span><strong>Full-Time Contract</strong> — 3-6 month engagements</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-ta">✓</span>
                    <span><strong>Technical Reviews</strong> — Codebase audits and recommendations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-ta">✓</span>
                    <span><strong>Team Mentoring</strong> — Knowledge transfer and training</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="font-semibold text-lg t1 mb-3">What to Include</h3>
                <p className="t2 text-sm mb-3">
                  When you reach out, it helps if you mention:
                </p>
                <ul className="space-y-1 t3 text-sm list-disc list-inside">
                  <li>Type of project or engagement</li>
                  <li>Technology stack and requirements</li>
                  <li>Timeline and expected duration</li>
                  <li>Budget range (if applicable)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-16 pt-12 border-t" style={{ borderColor: 'var(--c-border)' }}>
            <h2 className="font-display font-bold text-3xl tracking-tighter t1 mb-8">
              Frequently Asked Questions
            </h2>

            <div
              className="space-y-8"
              itemScope
              itemType="https://schema.org/FAQPage"
            >
              {[
                {
                  q: 'What is your typical response time?',
                  a: 'I aim to respond to inquiries within 24-48 hours. For urgent matters, feel free to call.',
                },
                {
                  q: 'Do you work with remote teams?',
                  a: 'Yes, I am fully remote-first and experienced working with distributed teams across different timezones.',
                },
                {
                  q: 'What technologies do you specialize in?',
                  a: 'Frontend: Angular, React, Next.js. Backend: Node.js, Express.js. Databases: MongoDB, MySQL, PostgreSQL. DevOps: Docker, GitHub Actions, CI/CD.',
                },
                {
                  q: 'Can you help with legacy systems?',
                  a: 'Absolutely. I have experience modernizing legacy codebases, improving performance, and implementing CI/CD.',
                },
                {
                  q: 'Do you offer hourly rates or project-based pricing?',
                  a: 'I am flexible with both. Hourly rates for consulting and support, project-based for well-defined scopes.',
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <h3 className="font-semibold text-lg t1 mb-2" itemProp="name">
                    {faq.q}
                  </h3>
                  <div
                    itemScope
                    itemType="https://schema.org/Answer"
                    className="t2 text-base"
                    itemProp="text"
                  >
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 pt-12 border-t text-center" style={{ borderColor: 'var(--c-border)' }}>
            <h2 className="font-display font-bold text-2xl t1 mb-4">
              Let's start a conversation
            </h2>
            <p className="t2 mb-6 max-w-md mx-auto">
              Reach out with your project details, and let's explore how we can work together.
            </p>
            <a
              href="mailto:aloknath.ar@gmail.com"
              className="btn-primary text-sm font-medium px-6 py-3 rounded-md transition-opacity"
            >
              Send me an email
            </a>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
