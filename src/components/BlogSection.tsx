import { Calendar, Clock, ArrowRight, TrendingUp, BarChart3, PieChart } from "lucide-react";

const posts = [
  {
    title: "How Fuel Prices Shape Nigeria's Inflation Story",
    excerpt:
      "A deep dive into the correlation between fuel price hikes and consumer price index movements from 1970 to 2026.",
    date: "Mar 15, 2026",
    readTime: "6 min read",
    category: "Economic Analysis",
    icon: TrendingUp,
  },
  {
    title: "Building Interactive Dashboards with Power BI",
    excerpt:
      "Step-by-step guide to creating KPI-driven sales dashboards that tell a clear business story.",
    date: "Feb 28, 2026",
    readTime: "8 min read",
    category: "Tutorial",
    icon: BarChart3,
  },
  {
    title: "Customer Segmentation: From Raw Data to Strategy",
    excerpt:
      "How clustering techniques can help businesses understand their customers and tailor marketing efforts.",
    date: "Feb 10, 2026",
    readTime: "5 min read",
    category: "Data Science",
    icon: PieChart,
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-semibold text-primary tracking-widest uppercase">
            Blog
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">
            Data <span className="text-gradient">Insights</span> & Articles
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Sharing analysis, tutorials, and perspectives on data-driven
            decision making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="glass-card p-6 flex flex-col gap-4 group hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">
                  <post.icon size={12} />
                  {post.category}
                </span>
              </div>

              <h3 className="text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-border/50">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <span className="text-xs font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read
                  <ArrowRight size={12} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
