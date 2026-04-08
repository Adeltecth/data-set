const skills = [
  { name: "Excel (Pivot Tables, Cleaning)", level: 90 },
  { name: "SQL", level: 80 },
  { name: "Python (Pandas, Matplotlib)", level: 75 },
  { name: "Power BI / Tableau", level: 70 },
  { name: "Statistics & Econometrics", level: 78 },
  { name: "HTML / CSS / JavaScript", level: 72 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="section-container space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A growing toolkit spanning data wrangling, analysis, visualization, and web development.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {skills.map((s) => (
            <div key={s.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{s.name}</span>
                <span className="text-primary font-mono">{s.level}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-[hsl(200,80%,50%)] transition-all duration-1000"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
