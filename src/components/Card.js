import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack borderRadius="2xl" bg="white" textColor="black">
      <Image borderRadius="2xl" width="full" src={imageSrc} />
      <VStack align="flex-start" padding="4">
        <Heading size="md">{title}</Heading>
        <Text textColor="gray" fontSize="lg">
          {description}
        </Text>
        <a href="#">
          <HStack>
            <Text>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </a>
      </VStack>
    </VStack>
  );
};

export default Card;
