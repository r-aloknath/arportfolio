export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-xs font-semibold tracking-widest uppercase ta mb-4">Tech stack</p>
      <h2 className="font-display font-bold text-3xl tracking-tighter t1 mb-8">
        Tools I use every day
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <p className="text-xs font-semibold tracking-wider uppercase t3 mb-3">Frontend</p>
          <div className="flex flex-wrap gap-2">
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
              <span key={skill} className="tag tag-a">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wider uppercase t3 mb-3">Backend &amp; APIs</p>
          <div className="flex flex-wrap gap-2">
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
              <span key={skill} className="tag tag-g">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wider uppercase t3 mb-3">DevOps &amp; Tooling</p>
          <div className="flex flex-wrap gap-2">
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
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wider uppercase t3 mb-3">
            Mobile &amp; Architecture
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'Ionic Framework',
              'React Native',
              'Micro-frontend',
              'Component-driven',
              'Lazy Loading',
              'State Management',
              'Code Splitting',
            ].map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}