import { useState } from "react";
import {
  Box,
  Button,
  Text,
  Drawer,
  Portal,
  CloseButton,
} from "@chakra-ui/react";
import Register from "./auth/register";

const About = ({ infoRef }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Box
      ref={infoRef}
      data-aos="fade-up"
      p={8}
      textAlign="center"
      mb={8}
      mt={8}
      color="white">
      <Text fontWeight="bold" fontSize="xx-large" mb={4} color="blue.700">
        About Us
      </Text>
      <Box data-aos="fade-up">
        <Text>
          At MPAC ICT HUB, we believe technology is the gateway to opportunity.
          Our mission is simple. To equip individuals and businesses with the
          digital skills, tools, and mindset to thrive in the modern world.
        </Text>
        <Text>
          Founded with a passion for innovation and learning, MPAC ICT HUB has
          become a trusted center for ICT training, mentorship, and tech-driven
          solutions. We offer courses from{" "}
          <strong>
            Cybersecurity, Web & Mobile Development, and Data Analytics
          </strong>{" "}
          to <strong>Blockchain, AI, and Digital Marketing</strong> — all
          designed to be practical, project-focused, and industry-relevant.
        </Text>

        <Box data-aos="fade-up" mt={6}>
          What sets us apart?
          <ul
            style={{
              listStyleType: "none",
              paddingLeft: "1.5rem",
            }}>
            <li>Expert Trainers — Learn from seasoned professionals.</li>
            <li>Hands-On Projects — Build real portfolio-worthy work.</li>
            <li>Supportive Community — Join a network of innovators.</li>
            <li>
              Career-Focused Learning — Turn skills into careers or businesses.
            </li>
          </ul>
        </Box>

        <Text data-aos="fade-up" mt={4}>
          Whether you're a student,entrepreneur, or professional looking to
          upgrade your skills, <strong>MPAC ICT HUB</strong> is your launchpad
          to a future powered by technology.
        </Text>
      </Box>

      <Drawer.Root
        open={showModal}
        onOpenChange={(e) => setShowModal(e.showModal)}>
        <Drawer.Trigger asChild>
          <Button
            mt={6}
            bg="primary"
            size="lg"
            color="white"
            _hover={{ bg: "primary" }}>
            Register for a course today?
          </Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            \
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
  );
};

export default About;
