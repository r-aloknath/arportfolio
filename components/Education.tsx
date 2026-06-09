export default function Education() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12" aria-label="Education section">
      <p className="text-xs font-semibold tracking-widest uppercase ta mb-4">Education</p>
      <div className="flex flex-col sm:flex-row gap-6" role="list">
        <article 
          className="card flex-1 p-5"
          role="listitem"
          itemScope
          itemType="https://schema.org/EducationalOccupationalCredential"
        >
          <h3 className="font-semibold text-sm t1 mb-1" itemProp="name">Master of Computer Applications (MCA)</h3>
          <div className="text-xs font-medium tg mb-1" itemProp="issuingOrganization">
            Indira Gandhi Institute of Technology, Sarang
          </div>
          <div className="text-xs t3" itemProp="datePublished">2020 – 2022</div>
        </article>
        <article 
          className="card flex-1 p-5"
          role="listitem"
          itemScope
          itemType="https://schema.org/EducationalOccupationalCredential"
        >
          <h3 className="font-semibold text-sm t1 mb-1" itemProp="name">
            Bachelor of Science in Computer Science
          </h3>
          <div className="text-xs font-medium tg mb-1" itemProp="issuingOrganization">Fakir Mohan University, Balasore</div>
          <div className="text-xs t3" itemProp="datePublished">2017 – 2020</div>
        </article>
      </div>
    </section>
  );
}