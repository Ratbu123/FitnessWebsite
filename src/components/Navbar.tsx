import { useState } from "react";
import { Dumbbell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = ["About", "Programs", "Schedule", "Trainers", "Pricing", "Blog", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <Dumbbell className="w-6 h-6 text-primary" />
          <span>Fit<span className="text-primary">Hive</span></span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button size="sm">Join Now</Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border p-4 space-y-3">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
          <Button size="sm" className="w-full">Join Now</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
