export default function Education() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <p className="text-xs font-semibold tracking-widest uppercase ta mb-4">Education</p>
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="card flex-1 p-5">
          <div className="font-semibold text-sm t1 mb-1">Master of Computer Applications (MCA)</div>
          <div className="text-xs font-medium tg mb-1">
            Indira Gandhi Institute of Technology, Sarang
          </div>
          <div className="text-xs t3">2020 – 2022</div>
        </div>
        <div className="card flex-1 p-5">
          <div className="font-semibold text-sm t1 mb-1">
            Bachelor of Science in Computer Science
          </div>
          <div className="text-xs font-medium tg mb-1">Fakir Mohan University, Balasore</div>
          <div className="text-xs t3">2017 – 2020</div>
        </div>
      </div>
    </section>
  );
}