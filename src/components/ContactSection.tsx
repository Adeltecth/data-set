import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Interested in working together? Let's connect and discuss how data can drive your business forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Send Message <Send size={16} />
            </button>
          </form>

          <div className="space-y-6">
            <div className="glass-card p-6 space-y-4">
              <h3 className="text-lg font-semibold">Let's Connect</h3>
              <p className="text-sm text-muted-foreground">
                I'm always open to discussing data analytics opportunities,
                freelance projects, or interesting data challenges.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:adeoyejoel121@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={18} className="text-primary" />
                  adeoyejoel121@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/adeleni"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={18} className="text-primary" />
                  LinkedIn Profile
                </a>
                <a
                  href="https://github.com/Adeltecth"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={18} className="text-primary" />
                  GitHub Profile
                </a>
              </div>
            </div>

            <div className="glass-card p-6 glow-border text-center space-y-3">
              <h3 className="text-lg font-bold text-gradient">Available for Hire</h3>
              <p className="text-sm text-muted-foreground">
                Currently seeking data analyst roles — remote or on-site in Nigeria.
              </p>
              <a
                href="/Adeoye_Joel_Data_Analyst_CV.docx"
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
