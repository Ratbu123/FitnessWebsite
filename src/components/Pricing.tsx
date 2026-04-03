import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useAnimation } from "@/hooks/AnimationContext";

const plans = [
  {
    name: "Basic",
    desc: "Great for getting started",
    monthly: 29,
    yearly: 276,
    features: [
      { text: "Full gym access", included: true },
      { text: "Locker room & showers", included: true },
      { text: "Basic equipment", included: true },
      { text: "2 group classes/week", included: true },
      { text: "Sauna & steam room", included: false },
      { text: "Personal training", included: false },
    ],
    popular: false,
  },
  {
    name: "Pro",
    desc: "Most popular for serious athletes",
    monthly: 59,
    yearly: 564,
    features: [
      { text: "Full gym access", included: true },
      { text: "Unlimited group classes", included: true },
      { text: "All equipment & zones", included: true },
      { text: "Sauna & steam room", included: true },
      { text: "1 PT session/month", included: true },
      { text: "FitHive app access", included: true },
    ],
    popular: true,
  },
  {
    name: "Elite",
    desc: "The ultimate fitness experience",
    monthly: 99,
    yearly: 948,
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Unlimited PT sessions", included: true },
      { text: "Custom nutrition plan", included: true },
      { text: "Priority class booking", included: true },
      { text: "2 guest passes/month", included: true },
      { text: "Recovery zone access", included: true },
    ],
    popular: false,
  },
];

const AnimatedPrice = ({ value }: { value: number }) => {
  const { animationsEnabled } = useAnimation();

  if (!animationsEnabled) {
    return <span>{value}</span>;
  }

  const motionValue = useMotionValue(value);
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 20 });
  const rounded = useTransform(springValue, (v) => Math.round(v));

  motionValue.set(value);

  return <motion.span>{rounded}</motion.span>;
};

const Pricing = () => {
  const [yearly, setYearly] = useState(false);
  const { animationsEnabled } = useAnimation();

  return (
    <section id="pricing" className="py-24">
      <div className="container">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Membership</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Flexible membership options to match your fitness journey. All plans include a 7-day free trial.
        </p>

        <div className="flex items-center gap-3 mb-12">
          <button
            onClick={() => setYearly(false)}
            className={`text-sm font-medium ${!yearly ? "text-foreground" : "text-muted-foreground"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(!yearly)}
            className={`relative w-12 h-6 rounded-full transition-colors ${yearly ? "bg-primary" : "bg-muted"}`}
          >
            <span
              className={`absolute top-0.5 w-5 h-5 rounded-full bg-foreground transition-transform ${
                yearly ? "left-[1.625rem]" : "left-0.5"
              }`}
            />
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`text-sm font-medium ${yearly ? "text-foreground" : "text-muted-foreground"}`}
          >
            Yearly <span className="text-primary text-xs ml-1">Save 20%</span>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative bg-card border rounded-xl p-6 flex flex-col ${
                p.popular ? "border-primary ring-1 ring-primary" : "border-border"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
              <div className="mb-1">
                <span className="text-4xl font-black">
                  $
                  <AnimatedPrice value={yearly ? Math.round(p.yearly / 12) : p.monthly} />
                </span>
                <span className="text-muted-foreground text-sm"> /month</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6">
                {yearly ? `Billed annually ($${p.yearly}/year)` : "Billed monthly"}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-2 text-sm">
                    {f.included ? <Check className="w-4 h-4 text-primary shrink-0" /> : <X className="w-4 h-4 text-muted-foreground/50 shrink-0" />}
                    <span className={f.included ? "text-foreground" : "text-muted-foreground/50"}>{f.text}</span>
                  </li>
                ))}
              </ul>

              <Button variant={p.popular ? "default" : "outline"} className="w-full">
                Start Free Trial
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;