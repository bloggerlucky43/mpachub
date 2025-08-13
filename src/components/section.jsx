import {
  Box,
  Text,
  Button,
  Flex,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import FadeContent from "./styles/FadeContent";
import TextType from "./styles/TextType";
import heroimg from "../assets/hero-img.png";
import "../components/ui/section.css";
const Section = ({ sectRef }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Flex
      ref={sectRef}
      data-aos="fade-up"
      backdropFilter="blur(12px)"
      opacity={0.9}
      justify="space-between"
      align="center"
      p={8}
      mt={10}
      flexDirection={{ base: "column", md: "row" }}>
      <Box
        w={isMobile ? "100%" : "50%"}
        p={4}
        textAlign={{ base: "center", md: "left" }}>
        {isMobile && (
          <Box p={4} mt={4} rounded="md" w={{ base: "100%", md: "50%" }}>
            <Image
              src={heroimg}
              loading="lazy"
              height={isMobile ? "300px" : "600px"}
            />
          </Box>
        )}
        <Text fontWeight={800} fontSize="x-large" mb={2}>
          MPAC ICT HUB
        </Text>
        <FadeContent
          blur={true}
          duration={1100}
          delay={500}
          threshold={0.2}
          easing="ease-out"
          initialOpacity={0}>
          <TextType
            text={[
              "An advanced regional hub delivering expert-led training in areas such as website development, digital security, user interface and experience design, 3D modeling and animation, visual communication design, Cisco networking (CCNA & CCNP), computer systems engineering, IT and computing fundamentals,Mobile app development, cybersecurity, ethical hacking, artificial intelligence and machine learning, as well as blockchain innovations.",
            ]}
            typingSpeed={90}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
          />
        </FadeContent>
        <Button
          bg="primary"
          justifySelf="center"
          mt={6}
          size="lg"
          color="white">
          Register for a course
        </Button>
      </Box>
      <Box
        p={4}
        mt={4}
        rounded="md"
        w={{ base: "100%", md: "50%" }}
        display={isMobile ? "none" : "block"}>
        <Image
          src={heroimg}
          loading="lazy"
          // height={isMobile ? "300px" : "600px"}
        />
      </Box>
    </Flex>
  );
};

export default Section;

// MPAC ICT HUB is the regional hub for ICT training, offering expert-led courses in various fields such as website development, digital security, UI/UX design, 3D modeling and animation, visual communication design, AutoCAD drafting, Cisco networking (CCNA & CCNP), computer systems engineering, IT fundamentals, mobile app development, cybersecurity, ethical hacking, AI and machine learning and Student Industrial Work Experience Scheme(SIWES) programs. The hub aims to equip individuals with the necessary skills and knowledge to excel in the ever-evolving ICT landscape, fostering innovation and technological advancement in the region.
