import { Search, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full glass-effect shadow-soft">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent hidden sm:block">
            ServiceHub
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search for services..."
              className="pl-10 bg-white/80 backdrop-blur border-primary/20 focus:border-primary transition-smooth rounded-full"
            />
          </div>
        </div>

        {/* Profile */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-primary/10 hover:text-primary transition-smooth"
        >
          <User className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
