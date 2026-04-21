import { ArrowDown, FileText } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary">Open to opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Data Analyst{" "}
              <span className="text-gradient">|</span>
              <br />
              Turning Data into{" "}
              <span className="text-gradient">Business Insights</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Economics graduate & self-taught developer combining analytical thinking
              with technical skills to uncover insights that drive decisions. Passionate
              about solving real-world problems in Nigeria and beyond.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                View Projects
                <ArrowDown size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                Contact Me
              </a>
              <a
                href="/Adeoye_Joel_Data_Analyst_CV.docx"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-colors"
              >
                <FileText size={16} />
                Download CV
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              {[
                { value: "4+", label: "Projects" },
                { value: "6+", label: "Tools" },
                { value: "B.Ed", label: "Economics" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden glow-border">
                <img
                  src={profilePhoto}
                  alt="Adeoye Joel"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass-card px-3 py-2 animate-float">
                <span className="text-xs font-mono font-medium text-primary">SQL</span>
              </div>
              <div className="absolute -bottom-2 -left-4 glass-card px-3 py-2 animate-float" style={{ animationDelay: "1s" }}>
                <span className="text-xs font-mono font-medium text-primary">Python</span>
              </div>
              <div className="absolute top-1/2 -right-8 glass-card px-3 py-2 animate-float" style={{ animationDelay: "2s" }}>
                <span className="text-xs font-mono font-medium text-primary">Excel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
