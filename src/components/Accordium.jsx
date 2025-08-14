import {
  Accordion,
  Box,
  Span,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const Accordium = ({ questionRef }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="blue.900" color="white">
      <Accordion.Root
        collapsible
        defaultValue={["b"]}
        p={4}
        m={4}
        w="80%"
        ref={questionRef}
        justifySelf="center"
        justifyContent="center">
        <Text
          textAlign="center"
          fontSize={isMobile ? "lg" : "x-large"}
          fontWeight="bold"
          data-aos="fade-up"
          mb={4}>
          FREQUENTLY ASKED QUESTIONS
        </Text>
        {items.map((item, index) => (
          <Accordion.Item key={index} value={item.value}>
            <Accordion.ItemTrigger>
              <Span flex="1">{item.title}</Span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Box>
  );
};

const items = [
  {
    value: "a",
    title: "Do I need to pay for SIWES?",
    text: "We do not charge you to pay for SIWES buy you have to pay a fee of N10,000 for Certification. The Certificate would be awarded to you at the end of your training session and after completion of all tests and projects. Also note that the above would be paid before the commencement of your SIWES.",
  },
  {
    value: "b",
    title: "How is the training session?",
    text: "The training session are in batches. Depending on the time you register, would depend on the batch you fall into. The training consists of theory, practicals and projects.",
  },
  {
    value: "c",
    title: "Can I pay in installment?",
    text: "Yes you can pay in installment. At least twice. The fees can be spread by 60% as first payment and 40% for the second payment",
  },
  {
    value: "d",
    title: "Can I register for more than 1 course per time?",
    text: "You can register for more than 1 course for as long as your brain can carry it and you would be able to meet up with your projects",
  },
  {
    value: "e",
    title: "Do I need a laptop before I can register or start classes",
    text: "We recommend that each students has their personal laptop so they would be any issues in class, but in a case where you don't have a laptop, one would be provided for you.",
  },
];

export default Accordium;
