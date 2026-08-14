import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
    <>
      <a href="#top" className="skip-link">
        Skip to main content
      </a>

      <div className="ambient" aria-hidden="true">
        <div className="ambient-glow-a" />
        <div className="ambient-glow-b" />
        <div className="ambient-bloom" data-bloom />
        <div className="ambient-grid" />
      </div>

      <Interactions />

      <div className="page">
        <Header />
        <main className="main" id="top">
          <Hero />
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
    </>
  );
}
