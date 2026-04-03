import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => (
  <section className="py-24 bg-secondary/30">
    <div className="container text-center max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Transformation Starts Today</h2>
      <p className="text-muted-foreground mb-8">
        Join FitHive and get your first week free. No commitment, no contracts.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" className="gap-2">
          Claim Free Week <ArrowRight className="w-4 h-4" />
        </Button>
        <Button size="lg" variant="outline">Talk to a Trainer</Button>
      </div>
    </div>
  </section>
);

export default CTA;
