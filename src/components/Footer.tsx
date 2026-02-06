const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Brand */}
          <div>
            <p className="font-display text-lg font-medium text-display">Gradesmith</p>
            <p className="body-small mt-1">Academic Evaluation Infrastructure</p>
          </div>

          {/* Copyright */}
          <div className="text-right">
            <p className="font-mono text-xs text-caption">
              © {new Date().getFullYear()} Gradesmith. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
