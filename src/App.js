import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
import ScrollToTop from "react-scroll-to-top";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <ScrollToTop style={{paddingLeft: "6px"}} smooth />
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>

      <AnimatedCursor
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: 'red'
  }}
  outerStyle={{
    border: '3px solid white'
  }}
/> 
    </div>
  );
}

export default App;
