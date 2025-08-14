import {
  Box,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { services } from "./servicelist";
const Services = ({ servicesref }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box
      ref={servicesref}
      data-aos="fade-up"
      p={4}
      bg="gray.100"
      justifyContent="center">
      <Box>
        <Text
          fontSize={isMobile ? "xl" : "xx-large"}
          fontWeight={isMobile ? "bold" : "bolder"}
          color="primary"
          textAlign="center">
          SERVICES
        </Text>
        <Text color="gray.800" fontSize="md" mt={4} mb={4} textAlign="center">
          Our Services at MPAC ICT HUB includes
        </Text>
      </Box>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={10} gap={8} p={5}>
        {services.map((service, index) => (
          <Box
            key={index}
            bg="whiteAlpha.100"
            data-aos="fade-up"
            border="1px solid"
            borderColor="blue.200"
            borderRadius="md"
            justifySelf="center"
            alignItems="center"
            maxW="300px"
            maxH="300px"
            p={5}
            shadow="md"
            _hover={{
              shadow: "lg",
              transform: "translateY(-4px)",
              transition: "0.3s",
            }}>
            <Box w="20%" justifySelf="center" p={4}>
              <Icon as={service.icon} boxSize={10} color="blue.500" mb={3} />
            </Box>
            <Text
              fontWeight="bold"
              textAlign="center"
              fontSize="lg"
              color="blue.700"
              mb={2}>
              {service.title}
            </Text>
            <Text fontSize="md" textAlign={"center"} color="gray.800">
              {service.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Services;
