import { Dumbbell, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="#" className="flex items-center gap-2 text-lg font-bold">
        <Dumbbell className="w-5 h-5 text-primary" />
        Fit<span className="text-primary">Hive</span>
      </a>
      <p className="text-sm text-muted-foreground">© 2026 FitHive. All rights reserved.</p>
      <div className="flex gap-3">
        <Button size="sm" variant="outline" className="gap-2">
          <Phone className="w-4 h-4" /> Call Now
        </Button>
        <Button size="sm">Join Now</Button>
      </div>
    </div>
  </footer>
);

export default Footer;
