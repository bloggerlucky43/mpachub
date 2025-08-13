import {
  Box,
  Text,
  Flex,
  Icon,
  Button,
  Field,
  Fieldset,
  Input,
  Textarea,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FaLocationArrow,
  FaInbox,
  FaPhone,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
const Contact = ({ contactRef }) => {
  const [state, handleSubmit] = useForm("xjvovqeg");
  const isMobile = useBreakpointValue({ base: true, md: false });
  if (state.succeeded) {
    return alert("Message sent successfully!");
  }
  return (
    <Box ref={contactRef}>
      {isMobile ? (
        <Box p={4} mb={8} mt={8} color="white">
          <Box data-aos="fade-up">
            <Text
              fontWeight="bold"
              mb={4}
              textAlign="center"
              color="blue.700"
              fontSize="x-large">
              CONTACT
            </Text>
            <Text textAlign="center" mb={4}>
              You can contact us using any of the address below or just drop us
              a message
            </Text>
          </Box>
          <Box data-aos="fade-up">
            <Flex mt={4} p={4} align="center" gap={4}>
              <Icon
                as={FaLocationArrow}
                bg="primary"
                boxSize={8}
                p={2}
                borderRadius="full"
              />
              <Box>
                <Text>Location:</Text>
                <Text>
                  Plot 1 Basin Road, Opposite Energy Multibiz station,Ilorin,
                  Nigeria
                </Text>
              </Box>
            </Flex>

            <Flex gap={4} mt={2} p={4} align="center">
              <Icon
                as={FaInbox}
                bg="primary"
                borderRadius="full"
                boxSize={8}
                p={2}
              />
              <Box pr={4}>
                <Text>Email:</Text>
                <Text>mpachub@gmail.com,mpacicthub@gmail.com</Text>
              </Box>
            </Flex>

            <Flex gap={4} mt={2} p={4} align="center">
              <Icon
                as={FaPhone}
                bg="primary"
                boxSize={8}
                p={2}
                borderRadius="full"
              />
              <Box>
                <Text>Call:</Text>
                <Text>090384757483</Text>
              </Box>
            </Flex>
            <Flex p={4} align="center">
              <Text>Follow us on:</Text>
              <Box
                ml={2}
                bg="primary"
                as="a"
                p={2}
                borderRadius="full"
                href="https://web.facebook.com/profile.php?id=61578221914150">
                <FaFacebook />
              </Box>
              <Box
                ml={2}
                bg="primary"
                p={2}
                borderRadius="full"
                as="a"
                href="https://www.instagram.com/mpac.icthub/">
                <FaInstagram />
              </Box>
            </Flex>
          </Box>

          <Box p={6} rounded="md" w="100%" data-aos="fade-down">
            <Fieldset.Root size="lg" maxW="md">
              <form onSubmit={handleSubmit}>
                <Fieldset.Content display="flex" p={4}>
                  <Field.Root>
                    <Field.Label>Your Name</Field.Label>
                    <Input
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      required
                    />
                    <ValidationError
                      prefix="name"
                      field="name"
                      errors={state.errors}
                    />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>Your Email</Field.Label>
                    <Input name="email" type="email" required />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>Subject</Field.Label>
                    <Input name="subject" required />
                    <ValidationError
                      prefix="Subject"
                      field="subject"
                      errors={state.errors}
                    />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label>Message</Field.Label>
                    <Textarea name="message" required />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </Field.Root>
                </Fieldset.Content>
                <Button
                  type="submit"
                  w="full"
                  mt={4}
                  borderRadius="md"
                  bg="primary"
                  disabled={state.submitting}>
                  Send Message
                </Button>
              </form>
            </Fieldset.Root>
          </Box>
        </Box>
      ) : (
        <Box
          // data-aos="zoom-in"
          p={8}
          mb={8}
          mt={8}
          color="white">
          <Box>
            <Text
              textAlign="center"
              fontSize="xx-large"
              mb={4}
              fontWeight="bold"
              color="blue.700">
              CONTACT
            </Text>
            <Text textAlign="center">
              You can contact us using any of the address below or just drop us
              a message
            </Text>
          </Box>

          <Flex justify="space-between" align="center" mt={8}>
            <Box p={6} rounded="md">
              <Flex gap={4} mt={4} p={4} align="center">
                <Icon
                  as={FaLocationArrow}
                  bg="primary"
                  boxSize={8}
                  p={2}
                  borderRadius="full"
                />
                <Box>
                  <Text>Location:</Text>
                  <Text>
                    Plot 1 Basin Road, Opposite Energy Multibiz station,Ilorin,
                    Nigeria
                  </Text>
                </Box>
              </Flex>

              <Flex gap={4} mt={4} p={4} align="center">
                <Icon
                  as={FaInbox}
                  bg="primary"
                  boxSize={8}
                  p={2}
                  borderRadius="full"
                />
                <Box>
                  <Text>Email:</Text>
                  <Text>mpachub@gmail.com,mpacicthub@gmail.com</Text>
                </Box>
              </Flex>

              <Flex gap={4} mt={4} p={4} align="center">
                <Icon
                  as={FaPhone}
                  bg="primary"
                  boxSize={8}
                  p={2}
                  borderRadius="full"
                />
                <Box>
                  <Text>Call:</Text>
                  <Text>090384757483</Text>
                </Box>
              </Flex>

              {/* social media */}
              <Flex p={4} align="center">
                <Text>Follow us on:</Text>
                <Box
                  ml={2}
                  bg="primary"
                  as="a"
                  p={2}
                  borderRadius="full"
                  href="https://web.facebook.com/profile.php?id=61578221914150">
                  <FaFacebook />
                </Box>
                <Box
                  ml={2}
                  bg="primary"
                  p={2}
                  borderRadius="full"
                  as="a"
                  href="https://www.instagram.com/mpac.icthub/">
                  <FaInstagram />
                </Box>
              </Flex>
            </Box>

            <Box p={6} rounded="md" w="50%">
              <Fieldset.Root size="lg" maxW="md">
                <form onSubmit={handleSubmit}>
                  <Fieldset.Content display="flex" p={4}>
                    <Field.Root>
                      <Field.Label>Your Name</Field.Label>
                      <Input
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        required
                      />
                      <ValidationError
                        prefix="name"
                        field="name"
                        errors={state.errors}
                      />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label>Your Email</Field.Label>
                      <Input name="email" type="email" required />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label>Subject</Field.Label>
                      <Input name="subject" required />
                      <ValidationError
                        prefix="Subject"
                        field="subject"
                        errors={state.errors}
                      />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label>Message</Field.Label>
                      <Textarea name="message" required />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </Field.Root>
                  </Fieldset.Content>
                  <Button
                    type="submit"
                    w="full"
                    mt={4}
                    borderRadius="md"
                    bg="primary"
                    disabled={state.submitting}>
                    Send Message
                  </Button>
                </form>
              </Fieldset.Root>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Contact;

// import ScrollStack, { ScrollStackItem } from './ScrollStack'

// <ScrollStack>
//   <ScrollStackItem>
//     <h2>Card 1</h2>
//     <p>This is the first card in the stack</p>
//   </ScrollStackItem>
//   <ScrollStackItem>
//     <h2>Card 2</h2>
//     <p>This is the second card in the stack</p>
//   </ScrollStackItem>
//   <ScrollStackItem>
//     <h2>Card 3</h2>
//     <p>This is the third card in the stack</p>
//   </ScrollStackItem>
// </ScrollStack>
