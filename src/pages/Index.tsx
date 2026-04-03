import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Schedule from "@/components/Schedule";
import Trainers from "@/components/Trainers";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AnimatedFadeIn from "@/components/ui/animatedfadein";

const Index = () => (
  <>
    <Navbar />
    <AnimatedFadeIn><Hero /></AnimatedFadeIn>
    <AnimatedFadeIn><Programs /></AnimatedFadeIn>
    <AnimatedFadeIn><Schedule /></AnimatedFadeIn>
    <AnimatedFadeIn><Trainers /></AnimatedFadeIn>
    <AnimatedFadeIn><Pricing /></AnimatedFadeIn>
    <AnimatedFadeIn><Testimonials /></AnimatedFadeIn>
    <AnimatedFadeIn><FAQ /></AnimatedFadeIn>
    <AnimatedFadeIn><CTA /></AnimatedFadeIn>
    <AnimatedFadeIn><Footer /></AnimatedFadeIn>
  </>
);

export default Index;