import Navbar        from "@/components/layout/Navbar";
import Footer        from "@/components/layout/Footer";
import GlitchBar     from "@/components/ui/GlitchBar";
import Hero          from "@/components/sections/Hero";
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
      <GlitchBar />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Portfolio />
        <Process />
        <About />
        {/* <WhyUs /> — temporarily disabled, restore when ready */}
        <Testimonials />
        <Contact />
      </main>
      <GlitchBar />
      <Footer />
    </>
  );
}
