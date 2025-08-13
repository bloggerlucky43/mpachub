import { useRef } from "react";
import { Box } from "@chakra-ui/react";
import Beams from "../components/ui/background/beam";
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
    <Box position="relative" minH="100vh" overflow="hidden">
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        zIndex={0}
        pointerEvents="none">
        <Beams
          beamWidth={1}
          beamHeight={20}
          beamNumber={10}
          lightColor="#FFFFFF"
          speed={10}
          noiseIntensity={0}
          scale={0.2}
          rotation={20}
        />
      </Box>

      <Box position="relative" zIndex={1} color="white" bg="whiteAlpha.100">
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
