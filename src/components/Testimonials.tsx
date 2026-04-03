const testimonials = [
  { quote: "I lost 30 pounds in 6 months and gained confidence I never knew I had. The trainers at FitHive genuinely care about your progress.", name: "Rachel Kim", info: "Member for 2 years" },
  { quote: "The CrossFit program pushed me beyond what I thought was possible. I went from barely doing one pull-up to competing in local events.", name: "James Torres", info: "Member for 1 year" },
  { quote: "As a busy professional, the flexible schedule and 24/7 access made all the difference. The app makes tracking my workouts effortless.", name: "Priya Sharma", info: "Member for 3 years" },
  { quote: "The variety of classes keeps me motivated. I have tried everything from boxing to yoga and love them all.", name: "Tanya Brooks", info: "Member for 1.5 years" },
  { quote: "As a competitive athlete, I need serious equipment and knowledgeable staff. FitHive delivers on both fronts.", name: "Derek Williams", info: "Member for 4 years" },
  { quote: "The 24/7 access is a game-changer for my schedule. Clean facility, great equipment, and the best trainers in the city.", name: "Lisa Nakamura", info: "Member for 2 years" },
];

const Testimonials = () => (
  <section id="testimonials" className="py-24 bg-secondary/30">
    <div className="container">
      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Success Stories</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results, Real People</h2>
      <p className="text-muted-foreground max-w-2xl mb-12">
        Hear from members who transformed their lives at FitHive.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card border border-border rounded-xl p-6">
            <p className="text-sm text-muted-foreground mb-6 italic">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                {t.name[0]}
              </div>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
