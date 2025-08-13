import { useState } from "react";
import {
  Box,
  Text,
  Button,
  Flex,
  Image,
  Drawer,
  Portal,
  CloseButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import FadeContent from "./styles/FadeContent";
import TextType from "./styles/TextType";
import heroimg from "../assets/hero-img.png";
import Register from "./auth/register";
import "../components/ui/section.css";
const Section = ({ sectRef }) => {
  const [showModal, setShowModal] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`;

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
              animation={`${float} 3s ease-in-out infinite`}
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
        <Drawer.Root
          open={showModal}
          onOpenChange={(e) => setShowModal(e.showModal)}>
          <Drawer.Trigger asChild>
            <Button
              bg="primary"
              justifySelf="center"
              mt={6}
              size="lg"
              color="white">
              Register for a course
            </Button>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content bg="whiteAlpha.100" backdropFilter="blur(12px)">
                <Drawer.Header color="white">Sign up</Drawer.Header>
                <Drawer.Body>
                  <Register />
                </Drawer.Body>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
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
          animation={`${float} 3s ease-in-out infinite`}
        />
      </Box>
    </Flex>
  );
};

export default Section;
