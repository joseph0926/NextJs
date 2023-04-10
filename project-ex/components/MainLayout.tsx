import { Box, Text, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const MainLayout = ({
  color,
  image,
  subtitle,
  title,
  description,
  roundImage,
  children,
}) => {
  return (
    <Box
      height="100%"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding="40px" align="end">
        <Box padding="20px">
          <Image
            boxSize="160px"
            boxShadow="2xl"
            borderRadius={roundImage ? "100%" : "3px"}
            src={image}
          />
        </Box>
        <Box padding="20px" lineHeight="40px" color="white">
          <Text fontSize="sm" fontWeight="bold" casing="uppercase">
            {subtitle}
          </Text>
          <Text fontSize="6xl">{title}</Text>
          <Text fontSize="sm">{description}</Text>
        </Box>
      </Flex>
      <Box paddingY="50px">{children}</Box>
    </Box>
  );
};

export default MainLayout;
