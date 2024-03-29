import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    p={8}
    backgroundColor="#2A4365">
    <VStack spacing={10}>
      <VStack spacing={2}>
        <Avatar size="xl" src="https://i.pravatar.cc/150?img=7" name="Pete" />
        <Heading size="xs">{greeting}</Heading>
      </VStack>
      <VStack spacing={2}>
        <Heading size="2xl">{bio1}</Heading>
        <Heading size="2xl">{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
