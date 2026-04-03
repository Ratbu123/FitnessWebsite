import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-gym.jpg";

const stats = [
  { value: "5,000+", label: "Members" },
  { value: "50+", label: "Classes/Week" },
  { value: "15+", label: "Expert Trainers" },
  { value: "24/7", label: "Access" },
];

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroImg} alt="Gym interior" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-background/75" />

    <div className="relative z-10 container text-center pt-20 pb-16">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-8">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        Now Open 24/7
      </span>

      <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6">
        Push Beyond <br />
        <span className="text-primary">Your Limits</span>
      </h1>

      <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-10">
        World-class equipment, expert trainers, and a community that pushes you further. Start your transformation today.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        <Button size="lg" className="gap-2">
          Start Free Trial <ArrowRight className="w-4 h-4" />
        </Button>
        <Button size="lg" variant="outline" className="border-border">
          View Programs
        </Button>
        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <span className="flex items-center justify-center w-10 h-10 rounded-full border border-border">
            <Play className="w-4 h-4" />
          </span>
          Watch Demo
        </button>
      </div>

      <div className="border-t border-border pt-10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-3xl md:text-4xl font-black text-foreground">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
