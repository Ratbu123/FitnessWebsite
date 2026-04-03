import { useState } from "react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const scheduleData: Record<string, { time: string; name: string; coach: string; level: string }[]> = {
  Monday: [
    { time: "6:00 AM", name: "Morning HIIT", coach: "Coach Marcus", level: "Intermediate" },
    { time: "8:00 AM", name: "Yoga Flow", coach: "Sarah Chen", level: "Beginner" },
    { time: "12:00 PM", name: "Strength Basics", coach: "Coach Marcus", level: "Beginner" },
    { time: "5:30 PM", name: "Boxing Fundamentals", coach: "Diego Reyes", level: "Beginner" },
    { time: "7:00 PM", name: "CrossFit WOD", coach: "Emily Park", level: "Advanced" },
  ],
  Tuesday: [
    { time: "6:00 AM", name: "Power Lifting", coach: "Coach Marcus", level: "Advanced" },
    { time: "9:00 AM", name: "Pilates Core", coach: "Sarah Chen", level: "Beginner" },
    { time: "12:00 PM", name: "HIIT Express", coach: "Emily Park", level: "Intermediate" },
    { time: "5:30 PM", name: "MMA Conditioning", coach: "Diego Reyes", level: "Intermediate" },
    { time: "7:00 PM", name: "Yoga Restore", coach: "Sarah Chen", level: "Beginner" },
  ],
  Wednesday: [
    { time: "6:00 AM", name: "CrossFit WOD", coach: "Emily Park", level: "Intermediate" },
    { time: "8:00 AM", name: "Stretch & Recover", coach: "Sarah Chen", level: "Beginner" },
    { time: "12:00 PM", name: "Boxing Sparring", coach: "Diego Reyes", level: "Advanced" },
    { time: "5:30 PM", name: "Strength & Power", coach: "Coach Marcus", level: "Intermediate" },
    { time: "7:00 PM", name: "HIIT Burn", coach: "Emily Park", level: "Advanced" },
  ],
  Thursday: [
    { time: "6:00 AM", name: "Morning Yoga", coach: "Sarah Chen", level: "Beginner" },
    { time: "9:00 AM", name: "Functional Training", coach: "Emily Park", level: "Intermediate" },
    { time: "12:00 PM", name: "HIIT Express", coach: "Coach Marcus", level: "Intermediate" },
    { time: "5:30 PM", name: "Kickboxing", coach: "Diego Reyes", level: "Intermediate" },
    { time: "7:00 PM", name: "Hypertrophy Lab", coach: "Coach Marcus", level: "Advanced" },
  ],
  Friday: [
    { time: "6:00 AM", name: "CrossFit Open", coach: "Emily Park", level: "Advanced" },
    { time: "8:00 AM", name: "Vinyasa Yoga", coach: "Sarah Chen", level: "Intermediate" },
    { time: "12:00 PM", name: "Strength Fundamentals", coach: "Coach Marcus", level: "Beginner" },
    { time: "5:30 PM", name: "Boxing Circuit", coach: "Diego Reyes", level: "Intermediate" },
    { time: "7:00 PM", name: "Total Body HIIT", coach: "Emily Park", level: "Advanced" },
  ],
};

const levelColor: Record<string, string> = {
  Beginner: "bg-green-500/10 text-green-400",
  Intermediate: "bg-yellow-500/10 text-yellow-400",
  Advanced: "bg-red-500/10 text-red-400",
};

const Schedule = () => {
  const [active, setActive] = useState("Monday");

  return (
    <section id="schedule" className="py-24">
      <div className="container">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">Schedule</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">This Week's Classes</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Find the perfect class that fits your schedule. From early morning to late evening, we have you covered.
        </p>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {days.map((d) => (
            <button
              key={d}
              onClick={() => setActive(d)}
              className={`px-5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                active === d ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {scheduleData[active].map((c, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-8 bg-card border border-border rounded-xl p-4 md:p-5 hover:border-primary/40 transition-colors">
              <span className="text-sm text-muted-foreground w-20 shrink-0 font-medium">{c.time}</span>
              <span className="font-semibold flex-1">{c.name}</span>
              <span className="hidden sm:block text-sm text-muted-foreground">{c.coach}</span>
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${levelColor[c.level]}`}>{c.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
