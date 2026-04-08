const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="section-container text-center space-y-2">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-gradient font-semibold">Adeoye Joel</span>. All rights reserved.
      </p>
      <p className="text-xs text-muted-foreground">
        Built with React & Tailwind CSS
      </p>
    </div>
  </footer>
);

export default Footer;
