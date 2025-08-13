import { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  Drawer,
  CloseButton,
  Portal,
  useBreakpointValue,
} from "@chakra-ui/react";
import Register from "./auth/register";
import Login from "./auth/login";
const NavBar = ({ onNavClick, refs }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      bg="whiteAlpha.100"
      backdropFilter="blur(12px)"
      boxShadow="sm"
      zIndex={100}
      position="fixed"
      top={0}
      left={0}
      w="100%">
      {isMobile ? (
        <Box>
          <Flex p={2} alignItems="center" justifyContent="space-between">
            <Text color="primary" fontWeight={800} fontSize="x-large">
              MPAC HUB
            </Text>
            <Box>
              <Drawer.Root
                open={showModal}
                onOpenChange={(e) => setShowModal(e.showModal)}>
                <Drawer.Trigger asChild>
                  <Button bg="none" borderRadius="sm" border="solid 1px">
                    Login
                  </Button>
                </Drawer.Trigger>
                <Portal>
                  <Drawer.Backdrop />
                  <Drawer.Positioner>
                    <Drawer.Content
                      bg="whiteAlpha.100"
                      backdropFilter="blur(12px)">
                      <Drawer.Header color="white">Login</Drawer.Header>
                      <Drawer.Body>
                        <Login />
                      </Drawer.Body>
                      <Drawer.CloseTrigger asChild>
                        <CloseButton size="sm" />
                      </Drawer.CloseTrigger>
                    </Drawer.Content>
                  </Drawer.Positioner>
                </Portal>
              </Drawer.Root>
              <Drawer.Root
                open={showDrawer}
                onOpenChange={(e) => setShowDrawer(e.showDrawer)}>
                <Drawer.Trigger asChild>
                  <Button bg="primary" ml={4}>
                    Apply
                  </Button>
                </Drawer.Trigger>
                <Portal>
                  <Drawer.Backdrop />
                  <Drawer.Positioner>
                    <Drawer.Content
                      bg="whiteAlpha.100"
                      backdropFilter="blur(12px)">
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
          </Flex>
        </Box>
      ) : (
        <Flex p={2} alignItems="center" justifyContent="space-around">
          <Text color="primary" fontWeight={800} fontSize="xx-large">
            MPAC HUB
          </Text>
          <Flex gap={8} justifyContent="center">
            <Text
              onClick={(e) => onNavClick(refs.home, e)}
              _hover={{ color: "primary" }}>
              Home
            </Text>
            <Text
              onClick={(e) => onNavClick(refs.about, e)}
              _hover={{ color: "primary" }}>
              About Us
            </Text>
            <Text
              onClick={(e) => onNavClick(refs.services, e)}
              _hover={{ color: "primary" }}>
              Courses
            </Text>
            <Text
              onClick={(e) => onNavClick(refs.contact, e)}
              _hover={{ color: "primary" }}>
              Contact Us
            </Text>
          </Flex>
          <Box>
            <Drawer.Root
              open={showModal}
              onOpenChange={(e) => setShowModal(e.showModal)}>
              <Drawer.Trigger asChild>
                <Button
                  bg="none"
                  borderRadius="sm"
                  border="solid 1px"
                  _hover={{ bg: "primary", border: "none" }}>
                  Login
                </Button>
              </Drawer.Trigger>
              <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                  <Drawer.Content
                    bg="whiteAlpha.100"
                    backdropFilter="blur(12px)">
                    <Drawer.Header color="white">Login</Drawer.Header>
                    <Drawer.Body>
                      <Login />
                    </Drawer.Body>
                    <Drawer.CloseTrigger asChild>
                      <CloseButton size="sm" />
                    </Drawer.CloseTrigger>
                  </Drawer.Content>
                </Drawer.Positioner>
              </Portal>
            </Drawer.Root>
            <Drawer.Root
              open={showDrawer}
              onOpenChange={(e) => setShowDrawer(e.showDrawer)}>
              <Drawer.Trigger asChild>
                <Button bg="primary" ml={4}>
                  Apply
                </Button>
              </Drawer.Trigger>
              <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                  <Drawer.Content
                    bg="whiteAlpha.100"
                    backdropFilter="blur(12px)">
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
        </Flex>
      )}
    </Box>
  );
};

export default NavBar;
