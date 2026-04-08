import { BookOpen, TrendingUp, Globe } from "lucide-react";

const cards = [
  {
    icon: BookOpen,
    title: "Economics Foundation",
    desc: "Bachelor of Economics Education providing strong analytical and quantitative reasoning skills.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Transition",
    desc: "Self-taught journey into data analysis — mastering Excel, SQL, Python, and visualization tools.",
  },
  {
    icon: Globe,
    title: "Real-World Impact",
    desc: "Focused on solving Nigerian economic challenges: fuel prices, inflation trends, and business analytics.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="section-container space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            An Economics graduate turned aspiring data analyst, I combine domain
            knowledge with technical tools to transform raw data into actionable
            insights that drive real business decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="glass-card p-6 hover-lift space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <c.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
