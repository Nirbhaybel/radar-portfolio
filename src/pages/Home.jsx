import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Skills from "../components/home/Skills";
import About from "../components/home/About";
import Projects from "../components/home/Projects";
import Publications from "../components/home/Publications";
import Patents from "../components/home/Patents";
import Navbar from "../components/layout/Navbar";
import Experience from "../components/home/Experience";
import FeaturedResearch from "../components/home/FeaturedResearch";
import Footer from "../components/layout/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
       <FeaturedResearch />
      <Skills />
      
      <Experience />
      <Projects />
      
        <Patents />
       <Footer /> 
    </>
  );
}