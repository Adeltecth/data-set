import { ExternalLink } from "lucide-react";
import projectFuel from "@/assets/project-fuel.jpg";
import projectInflation from "@/assets/project-inflation.jpg";
import projectSales from "@/assets/project-sales.jpg";
import projectSegmentation from "@/assets/project-segmentation.jpg";

const projects = [
  {
    title: "Fuel Price Analysis in Nigeria (1970–2026)",
    problem:
      "Understanding the historical trajectory of fuel prices in Nigeria and identifying key economic shocks that influenced pricing over five decades.",
    tools: ["Excel", "Python", "Pandas", "Matplotlib"],
    insights: [
      "Fuel prices surged 300% after subsidy removals",
      "Strong correlation between Naira depreciation and price hikes",
      "Inflation-adjusted prices reveal hidden patterns",
    ],
    image: projectFuel,
    link: "/adeoye_joel_data_projects.html",
  },
  {
    title: "Nigeria Inflation & Unemployment Analysis",
    problem:
      "Examining the Phillips Curve relationship in Nigeria's economy to understand how inflation and unemployment interact in an emerging market context.",
    tools: ["Python", "SQL", "Tableau"],
    insights: [
      "The traditional Phillips Curve breaks down in Nigeria's context",
      "Food inflation is the primary driver of headline inflation",
      "Youth unemployment remains structurally high regardless of inflation",
    ],
    image: projectInflation,
    link: "/adeoye_joel_data_projects.html",
  },
  {
    title: "Sales Dashboard Project",
    problem:
      "A retail business needed a centralized view of performance KPIs to track revenue, profit margins, and seasonal trends across product categories.",
    tools: ["Power BI", "Excel", "SQL"],
    insights: [
      "Q4 consistently drives 35% of annual revenue",
      "Electronics category has highest margin but lowest volume",
      "Customer retention rate correlates with promotional periods",
    ],
    image: projectSales,
    link: "/adeoye_joel_data_projects.html",
  },
  {
    title: "Customer Segmentation Analysis",
    problem:
      "An e-commerce company wanted to identify distinct customer groups to personalize marketing campaigns and improve conversion rates.",
    tools: ["Python", "Scikit-learn", "Pandas"],
    insights: [
      "4 distinct customer clusters identified via K-Means",
      "High-value segment represents 18% of customers but 52% of revenue",
      "At-risk segment shows declining purchase frequency",
    ],
    image: projectSegmentation,
    link: "/adeoye_joel_data_projects.html",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="section-container space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real-world data projects demonstrating end-to-end analytical thinking — from problem framing to actionable insights.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`glass-card overflow-hidden hover-lift grid md:grid-cols-2 gap-0 ${i % 2 === 1 ? "md:direction-rtl" : ""
                }`}
            >
              <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-full object-cover min-h-[220px]"
                />
              </div>
              <div className={`p-6 sm:p-8 space-y-4 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.problem}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-sm font-semibold text-primary">Key Insights</h4>
                  <ul className="space-y-1">
                    {p.insights.map((ins) => (
                      <li key={ins} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {ins}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  View Details <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
