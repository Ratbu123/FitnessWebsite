import { useState } from "react";
import { Dumbbell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnimation } from "@/hooks/AnimationContext";

const navLinks = ["About", "Programs", "Schedule", "Trainers", "Pricing", "Blog", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { animationsEnabled, toggleAnimations } = useAnimation();

  const hoverClass = animationsEnabled ? "hover:text-foreground transition-colors" : "";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <Dumbbell className="w-6 h-6 text-primary" />
          <span>
            Fit<span className="text-primary">Hive</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm text-muted-foreground ${hoverClass}`}
            >
              {link}
            </a>
          ))}
          <Button size="sm" onClick={toggleAnimations}>
            {animationsEnabled ? "Premium" : "Standard"}
          </Button>
          <Button size="sm">Join Now</Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border p-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`block text-sm text-muted-foreground ${hoverClass}`}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <Button size="sm" onClick={toggleAnimations} className="w-full">
            {animationsEnabled ? "Premium" : "Standard"}
          </Button>
          <Button size="sm" className="w-full">
            Join Now
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;