import React, { useRef } from "react";
import {
  Navbar,
  Hero,
  AboutSection,
  Menusection,
  Testimonial,
  Imagescroll,
  Footer,
} from "./Compo/index";
import "./App.css";
export default function App() {
  let Aboutref = useRef(null);
  let menu = useRef(null);
  let reviewsref = useRef(null);

  const Scrolltoabout = () => {
    Aboutref.current.scrollIntoView({
      behaviour: "smooth",
    });
  };

  const ScrolltoMenu = () => {
    menu.current.scrollIntoView({
      behaviour: "smooth",
    });
  };

  const scrollreviews = () => {
    reviewsref.current.scrollIntoView({
      behaviour: "smooth",
    });
  };

  return (
    <>
      <Navbar
        Scrolltoabout={Scrolltoabout}
        ScrolltoMenu={ScrolltoMenu}
        scrollreviews={scrollreviews}
      />
      <Hero ScrolltoMenu={ScrolltoMenu} />
      {/* about section */}
      <div ref={Aboutref}>
        <AboutSection />
      </div>
      {/* review section */}
      <div ref={menu}>
        <Menusection />
      </div>
      <div ref={reviewsref}>
        <Testimonial />
      </div>
      <Imagescroll />
      <Footer Scrolltoabout={Scrolltoabout} ScrolltoMenu={ScrolltoMenu} />
    </>
  );
}
