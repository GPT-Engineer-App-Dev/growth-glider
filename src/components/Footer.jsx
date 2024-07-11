import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin size={20} />
            </a>
          </div>
          <nav className="flex space-x-4">
            <NavLink to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </NavLink>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;