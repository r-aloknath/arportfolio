'use client';

export default function Projects() {
  const projects = [
    {
      title: 'Swipetouch — School ERP',
      tech: 'React.js · Node.js · REST APIs',
      desc: 'Dashboards for student management, attendance tracking, and fee workflows across multi-role access for admins, teachers, and parents.',
    },
    {
      title: 'ACCRM — Retail CRM',
      tech: 'React Native · Node.js · MongoDB',
      desc: 'End-to-end CRM with customer management, lead tracking, order history, and push notifications for multi-branch retail operations.',
    },
    {
      title: 'Friday — Website Builder',
      tech: 'React.js · Drag-and-Drop Libraries',
      desc: 'No-code page builder with drag-and-drop modules, template selection, live preview, and JSON-serialized layout persistence.',
    },
    {
      title: 'CuteOffice — Office ERP',
      tech: 'Angular · Node.js · Express.js · MySQL',
      desc: 'Enterprise HR, leave tracking, project allocation, and reporting dashboards with role-based auth and reactive forms.',
    },
    {
      title: 'MyGoalZ — Social App',
      tech: 'React Native · Node.js · MongoDB',
      desc: 'Social platform with profiles, posts, follows, and real-time feeds — pagination and caching for high-volume mobile access.',
    },
    {
      title: 'Ximple — Marketplace App',
      tech: 'Angular · Ionic · REST APIs',
      desc: 'Cross-platform marketplace with product search, cart, orders, camera and geolocation — seamless on Android and iOS.',
    },
  ];

  return (
    <section id="work" className="max-w-4xl mx-auto px-6 py-16" aria-label="Projects section">
      <p className="text-xs font-semibold tracking-widest uppercase ta mb-4">Projects</p>
      <h2 className="font-display font-bold text-3xl tracking-tighter t1 mb-8">
        Selected work
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
        {projects.map((project, idx) => (
          <article 
            key={idx} 
            className="card card-hover p-5 transition-all cursor-default"
            role="listitem"
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <h3 className="font-semibold text-sm t1 mb-1" itemProp="name">{project.title}</h3>
            <p className="text-xs font-medium ta mb-2" itemProp="keywords">{project.tech}</p>
            <p className="text-xs t2 leading-relaxed" itemProp="description">{project.desc}</p>
            <meta itemProp="creator" content="Aloknath Rath" />
          </article>
        ))}
      </div>
    </section>
  );
}