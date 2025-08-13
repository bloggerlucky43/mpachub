import { Box, Text, Avatar, Stack, useBreakpointValue } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "Chiamaka O.",
    role: "Data Analyst",
    feedback:
      "MPAC ICT HUB transformed my career! Hands-on training in Python and Data Analytics gave me the confidence to land my first tech job within months.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "David O.",
    role: "Cybersecurity Enthusiast",
    feedback:
      "From Cybersecurity to AI, MPAC offers diverse courses with real-world projects that helped me build my portfolio.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Amaka A.",
    role: "UI/UX Designer",
    feedback:
      "I never imagined I could design my own app until I joined MPAC. Creative, fun, and supportive environment!",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

export default function TestimonialsMarquee({ reviewRef }) {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box bg="whiteAlpha.200" ref={reviewRef} py={10} data-aos="zoom-in">
      <Text
        fontSize={isMobile ? "2xl" : "3xl"}
        fontWeight="bold"
        textAlign="center"
        color="blue.700"
        mb={6}>
        What Our Students Say
      </Text>

      <Marquee pauseOnHover gradient={false} speed={50}>
        {testimonials.map((t, index) => (
          <Box
            key={index}
            bg="whiteAlpha.400"
            p={6}
            mx={4}
            minW="300px"
            rounded="lg"
            shadow="md">
            <Stack spacing={4} align="center" textAlign="center">
              <Avatar.Root>
                <Avatar.Fallback name={t.name} />
                <Avatar.Image src={t.avatar} />
              </Avatar.Root>

              <Text fontWeight="semibold" color="white">
                {t.name}
              </Text>
              <Text fontSize="sm" fontWeight={"semibold"} color="primary">
                {t.role}
              </Text>
              <Text fontSize="sm" color="white">
                "{t.feedback}"
              </Text>
            </Stack>
          </Box>
        ))}
      </Marquee>
    </Box>
  );
}
