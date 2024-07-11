import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <NavLink to="/" className="text-2xl font-bold">
            SaaSLogo
          </NavLink>
        </div>
        <nav className="hidden md:flex space-x-4">
          <NavLink to="/" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Home
          </NavLink>
          <NavLink to="/features" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Features
          </NavLink>
          <NavLink to="/pricing" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Pricing
          </NavLink>
          <NavLink to="/about" className="text-sm font-medium text-muted-foreground hover:text-primary">
            About
          </NavLink>
          <NavLink to="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Contact
          </NavLink>
        </nav>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
};

export default Header;