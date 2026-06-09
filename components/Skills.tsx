'use client';

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16" aria-label="Skills section">
      <p className="text-xs font-semibold tracking-widest uppercase ta mb-4">Tech stack</p>
      <h2 className="font-display font-bold text-3xl tracking-tighter t1 mb-8">
        Tools I use every day
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xs font-semibold tracking-wider uppercase t3 mb-3">Frontend</h3>
          <div className="flex flex-wrap gap-2" role="list">
            {[
              'Angular',
              'React.js',
              'Next.js',
              'TypeScript',
              'JavaScript ES6+',
              'Tailwind CSS',
              'RxJS',
              'NgRx',
              'Redux',
              'TanStack Query',
              'WCAG Accessibility',
              'Sass / Bootstrap',
            ].map((skill) => (
              <span key={skill} className="tag tag-a" role="listitem">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-wider uppercase t3 mb-3">Backend &amp; APIs</h3>
          <div className="flex flex-wrap gap-2" role="list">
            {[
              'Node.js',
              'Express.js',
              'RESTful APIs',
              'JWT / OAuth 2.0',
              'GraphQL',
              'MySQL',
              'PostgreSQL',
              'MongoDB',
              'Mongoose ODM',
            ].map((skill) => (
              <span key={skill} className="tag tag-g" role="listitem">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-wider uppercase t3 mb-3">DevOps &amp; Tooling</h3>
          <div className="flex flex-wrap gap-2" role="list">
            {[
              'GitHub Actions',
              'Jenkins',
              'Docker',
              'CI/CD Pipelines',
              'Webpack',
              'Vite',
              'Git / GitHub',
              'Postman',
            ].map((skill) => (
              <span key={skill} className="tag" role="listitem">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-wider uppercase t3 mb-3">
            Mobile &amp; Architecture
          </h3>
          <div className="flex flex-wrap gap-2" role="list">
            {[
              'Ionic Framework',
              'React Native',
              'Micro-frontend',
              'Component-driven',
              'Lazy Loading',
              'State Management',
              'Code Splitting',
            ].map((skill) => (
              <span key={skill} className="tag" role="listitem">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}