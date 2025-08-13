import { Box, Button, Text } from "@chakra-ui/react";

const About = ({ infoRef }) => {
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
      <Box>
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

        <Box mt={6}>
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

        <Text mt={4}>
          Whether you're a student,entrepreneur, or professional looking to
          upgrade your skills, <strong>MPAC ICT HUB</strong> is your launchpad
          to a future powered by technology.
        </Text>
      </Box>

      <Button
        mt={6}
        bg="primary"
        size="lg"
        color="white"
        _hover={{ bg: "primary" }}>
        Register for a course today?
      </Button>
    </Box>
  );
};

export default About;

// export default function AboutUs(
//         <Stack spacing={4} color="gray.600" fontSize="lg">
//           <Text>
//             At <strong>MPAC ICT HUB</strong>, we believe technology is the
//             gateway to opportunity. Our mission is simple:{" "}
//             <em>
//               equip individuals and businesses with the digital skills, tools,
//               and mindset to thrive in the modern world.
//             </em>
//           </Text>

//           <Text>
//             Founded with a passion for innovation and learning, MPAC ICT HUB has
//             become a trusted center for ICT training, mentorship, and
//             tech-driven solutions. We offer courses from{" "}
//             <strong>Cybersecurity, Web & Mobile Development, and Data Analytics</strong>{" "}
//             to <strong>Blockchain, AI, and Digital Marketing</strong> — all
//             designed to be practical, project-focused, and industry-relevant.
//           </Text>

//           <Text>
//             What sets us apart?
//             <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
//               <li>Expert Trainers — Learn from seasoned professionals.</li>
//               <li>Hands-On Projects — Build real portfolio-worthy work.</li>
//               <li>Supportive Community — Join a network of innovators.</li>
//               <li>
//                 Career-Focused Learning — Turn skills into careers or
//                 businesses.
//               </li>
//             </ul>
//           </Text>

//           <Text>
//             Whether you’re a student, entrepreneur, or professional looking to
//             upgrade your skills, <strong>MPAC ICT HUB</strong> is your launchpad
//             to a future powered by technology.
//           </Text>
//         </Stack>

//         <Button
//           mt={6}
//           colorScheme="blue"
//           size="lg"
//           _hover={{ transform: "translateY(-2px)", shadow: "md" }}
//         >
//           Learn More
//         </Button>
//       </MotionBox>
//     </Box>
//   );
// }
