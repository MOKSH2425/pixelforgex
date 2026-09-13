import Hero          from "@/components/sections/Hero";
import ServiceHub    from "@/components/sections/ServiceHub";
import Ticker        from "@/components/sections/Ticker";
import About         from "@/components/sections/About";
// import WhyUs         from "@/components/sections/WhyUs"; // temporarily disabled — restore when ready
import Testimonials  from "@/components/sections/Testimonials";
import Contact       from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceHub />
      <Ticker />
      <About />
      {/* <WhyUs /> — temporarily disabled, restore when ready */}
      <Testimonials />
      <Contact />
    </>
  );
}
