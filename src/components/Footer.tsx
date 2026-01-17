import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container py-12">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* BRAND */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="rounded-lg bg-gradient-to-br from-primary to-secondary p-2">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ToolifyAI
              </span>
            </Link>

            <p className="text-sm text-muted-foreground">
              Discover and explore the best AI tools.  
              Curated by humans, powered by community.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/trending" className="hover:text-primary transition">
                  Trending Tools
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-primary transition">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-primary transition">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/suggest-tool" className="hover:text-primary transition">
                  Suggest a Tool
                </Link>
              </li>
            </ul>
          </div>

          {/* PAGES */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide">
              Pages
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border p-2 hover:bg-muted transition"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border p-2 hover:bg-muted transition"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border p-2 hover:bg-muted transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 text-sm text-muted-foreground md:flex-row">
          <span>
            © {new Date().getFullYear()} ToolifyAI. All rights reserved.
          </span>
          <span className="text-center md:text-right">
            Users suggest tools • Maintainers approve listings
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
