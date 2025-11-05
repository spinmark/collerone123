import { Home, Briefcase, Grid, LogIn } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const links = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Briefcase, label: "Services", href: "#services" },
    { icon: Grid, label: "Categories", href: "#categories" },
    { icon: LogIn, label: "Login", href: "#login" },
  ];

  return (
    <footer className="sticky bottom-0 z-50 w-full glass-effect shadow-soft border-t border-primary/10 sm:hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          {links.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              size="sm"
              className="flex flex-col items-center gap-1 hover:text-primary transition-smooth h-auto py-2"
            >
              <link.icon className="w-5 h-5" />
              <span className="text-xs">{link.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
