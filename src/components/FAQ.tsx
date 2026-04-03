import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Can I freeze my membership?", a: "Yes, you can freeze your membership for up to 3 months per year at no additional cost. This is perfect for vacations, injuries, or other life events. Simply notify us at least 7 days in advance." },
  { q: "Do you offer personal training?", a: "Absolutely! We have certified personal trainers who create customized workout programs based on your goals, fitness level, and preferences. First-time members receive a complimentary consultation session." },
  { q: "What group classes do you offer?", a: "We offer 50+ weekly classes including HIIT, yoga, spinning, boxing, CrossFit, Pilates, and more. Classes are included in all membership tiers and led by certified instructors." },
  { q: "Is there a locker room with showers?", a: "Yes, our facility includes spacious locker rooms with private showers, complimentary towels, body wash, and hair dryers. Premium members also get access to our sauna and steam room." },
  { q: "Can I bring a guest?", a: "Members can bring a guest for a day pass fee. Premium members receive 2 free guest passes per month. Guests must sign a waiver and be accompanied by the member during their visit." },
];

const FAQ = () => (
  <section id="faq" className="py-24">
    <div className="container max-w-3xl">
      <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">FAQ</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
      <p className="text-muted-foreground mb-10">
        Find answers to common questions about our gym memberships and fitness programs.
      </p>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-5">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
