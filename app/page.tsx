import Hero          from "@/components/sections/Hero";
import ServiceHub    from "@/components/sections/ServiceHub";
import Ticker        from "@/components/sections/Ticker";
import Services      from "@/components/sections/Services";
import Portfolio     from "@/components/sections/Portfolio";
import Process       from "@/components/sections/Process";
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
      <Services />
      <Portfolio />
      <Process />
      <About />
      {/* <WhyUs /> — temporarily disabled, restore when ready */}
      <Testimonials />
      <Contact />
    </>
  );
}
