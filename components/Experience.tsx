'use client';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Developer — Full Stack',
      company: 'SAIntellect Solutions (formerly SWAPPL INTELLECT)',
      period: 'Feb 2024 – May 2026',
      location: 'Bhubaneswar, Odisha',
      points: [
        '35% improvement in page load via code splitting, lazy loading & image optimisation',
        'Designed and secured 25+ REST APIs with JWT auth; reduced failure rate by 20%',
        'Built reusable Angular component library with NgRx, RxJS & reactive forms',
        'Established CI/CD pipelines increasing release frequency by 40%',
        'Led code reviews and mentored junior developers across the team',
        'Delivered 15+ production-ready features per quarter across Agile squads',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'HyScaler (formerly NETTANTRA)',
      period: 'Sep 2023 – Jan 2024',
      location: 'Bhubaneswar, Odisha',
      points: [
        'Built 20+ responsive UI modules in React & Angular; improved interaction efficiency by 25%',
        'Reduced page load time by 30% via memoisation, modular architecture & bundle analysis',
        'Integrated 15+ REST APIs; reduced data latency by 18%',
        'Peer reviews that cut bug count by 15% in a team of 6–8 engineers',
      ],
    },
    {
      title: 'Associate Consultant — Mobile & Web Developer',
      company: 'Invincix',
      period: 'Sep 2022 – Jul 2023',
      location: 'Bhubaneswar, Odisha',
      points: [
        'Cross-platform Ionic apps serving 10,000+ users; improved mobile usability scores by 25%',
        'Led end-to-end build of an auto garage management platform — 20+ modules',
        'Integrated 15+ third-party APIs; reduced manual data processing by 30%',
      ],
    },
    {
      title: 'Frontend Developer Intern',
      company: 'TECHBORN',
      period: 'Mar 2022 – Aug 2022',
      location: 'Brahmapur, Odisha',
      points: [
        '15+ responsive UI components in Angular, HTML5, CSS3 & Bootstrap',
        'Reduced frontend defects by 20% during QA and UAT cycles',
        'Gained hands-on exposure to REST API consumption and Angular state patterns',
      ],
    },
  ];

  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16" aria-label="Experience section">
      <p className="text-xs font-semibold tracking-widest uppercase ta mb-4">Experience</p>
      <h2 className="font-display font-bold text-3xl tracking-tighter t1 mb-8">
        Where I've worked
      </h2>

      <div style={{ borderTop: '1px solid var(--c-border)' }} role="list">
        {experiences.map((exp, idx) => (
          <article
            key={idx}
            className="py-7 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4"
            style={{ borderBottom: '1px solid var(--c-border)' }}
            role="listitem"
            itemScope
            itemType="https://schema.org/EmployeeRole"
          >
            <div>
              <h3 className="font-semibold text-sm t1 mb-1" itemProp="jobTitle">{exp.title}</h3>
              <div className="text-xs font-medium tg mb-3" itemProp="hiringOrganization">{exp.company}</div>
              <ul className="space-y-1 text-xs t2 leading-relaxed list-disc list-inside">
                {exp.points.map((point, i) => (
                  <li key={i} itemProp="description">{point}</li>
                ))}
              </ul>
            </div>
            <div className="text-xs t3 sm:text-right">
              <span className="block font-medium t2" itemProp="startDate">{exp.period}</span>
              <span itemProp="jobLocation">{exp.location}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}