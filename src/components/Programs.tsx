import { Dumbbell, Flame, Heart, Swords, Zap, UserCheck } from "lucide-react";

const programs = [
  { icon: Dumbbell, title: "Strength Training", desc: "Build muscle and increase power with structured progressive overload programs and expert guidance." },
  { icon: Flame, title: "HIIT", desc: "High-intensity interval training for maximum calorie burn. Short, intense sessions that deliver real results." },
  { icon: Heart, title: "Yoga & Flexibility", desc: "Find mind-body balance with guided yoga sessions. Improve flexibility, reduce stress, and aid recovery." },
  { icon: Swords, title: "Boxing & MMA", desc: "Learn striking fundamentals and self-defense techniques. Build confidence while getting an incredible workout." },
  { icon: Zap, title: "CrossFit", desc: "Functional fitness at high intensity. Challenge yourself with varied workouts that build all-round athleticism." },
  { icon: UserCheck, title: "Personal Training", desc: "One-on-one customized coaching tailored to your goals. Get a workout plan and nutrition guidance built for you." },
];

const Programs = () => (
  <section id="programs" className="py-24 bg-secondary/30">
    <div className="container">
      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Programs</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Training Programs for Every Goal</h2>
      <p className="text-muted-foreground max-w-2xl mb-12">
        Whether you want to build muscle, lose weight, or improve flexibility, we have a program designed for you.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((p) => (
          <div key={p.title} className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <p.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Programs;
