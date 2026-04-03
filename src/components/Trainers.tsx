import { Instagram, Twitter } from "lucide-react";

const trainers = [
  {
    name: "Marcus Johnson",
    role: "Strength & Conditioning",
    exp: "12 years experience",
    desc: "Former competitive powerlifter turned coach. Specializes in progressive overload and periodization.",
    img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop",
  },
  {
    name: "Sarah Chen",
    role: "Yoga & Flexibility",
    exp: "8 years experience",
    desc: "Certified yoga instructor with a focus on mindful movement, mobility, and stress reduction.",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop",
  },
  {
    name: "Diego Reyes",
    role: "Boxing & MMA",
    exp: "10 years experience",
    desc: "Professional MMA background with expertise in striking, conditioning, and fight preparation.",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop",
  },
  {
    name: "Emily Park",
    role: "CrossFit & HIIT",
    exp: "7 years experience",
    desc: "CrossFit Level 3 trainer passionate about functional fitness and helping athletes of all levels.",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop",
  },
];

const Trainers = () => (
  <section id="trainers" className="py-24 bg-secondary/30">
    <div className="container">
      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Our Team</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Trainers</h2>
      <p className="text-muted-foreground max-w-2xl mb-12">
        Our certified trainers bring years of experience and passion to help you reach your fitness goals.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trainers.map((t) => (
          <div key={t.name} className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-colors">
            <div className="relative overflow-hidden aspect-[4/5]">
              <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 flex gap-2">
                <a href="#" className="w-8 h-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg">{t.name}</h3>
              <p className="text-primary text-sm">{t.role}</p>
              <p className="text-xs text-muted-foreground mt-1">{t.exp}</p>
              <p className="text-sm text-muted-foreground mt-3">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Trainers;
