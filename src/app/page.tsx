import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Work from "@/components/Work";
import EarlierWork from "@/components/EarlierWork";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Interactions from "@/components/Interactions";

export default function Home() {
  return (
    <div className="shell">
      <a href="#top" className="skip-link">
        Skip to main content
      </a>

      <div className="ambient" aria-hidden="true">
        <div className="ambient-top" />
        <div className="ambient-bottom" />
        <div className="ambient-spot" data-spot />
        <div className="ambient-columns" />
        <div className="ambient-noise" />
      </div>

      <div className="cursor-dot" data-cursor-dot aria-hidden="true" />
      <div className="cursor-ring" data-cursor-ring aria-hidden="true" />
      <div className="progress" data-progress aria-hidden="true" />

      <Interactions />

      <div className="page">
        <Header />
        <main id="top">
          <Hero />
          <Marquee />
          <Stats />
          <Work />
          <EarlierWork />
          <Experience />
          <Education />
          <Stack />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
