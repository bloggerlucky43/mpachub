import { useRef } from "react";
import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Section from "../components/section";
import Services from "../components/Services";
import Accordium from "../components/Accordium";
import About from "../components/About";
import Contact from "../components/contact";
import Testimonials from "../components/Testimonials";
const Landing = () => {
  const sectionRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);
  const accordiumRef = useRef(null);

  const scrollToSection = (ref, e) => {
    e.preventDefault();
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box minH="100vh" overflow="hidden">
      <Box zIndex={1} color="white">
        <NavBar
          onNavClick={scrollToSection}
          refs={{
            home: sectionRef,
            about: aboutRef,
            services: serviceRef,
            testimonials: testimonialRef,
            contact: contactRef,
          }}
        />
        <Section sectRef={sectionRef} />
        <About infoRef={aboutRef} />
        <Services servicesref={serviceRef} />
        <Testimonials reviewRef={testimonialRef} />
        <Contact contactRef={contactRef} />
        <Accordium questionRef={accordiumRef} />
      </Box>
    </Box>
  );
};
export default Landing;
