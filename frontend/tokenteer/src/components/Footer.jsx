import { Box, Text, Flex } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box position="absolute" bottom={0} width="100%" bgColor="#fdf7ed" zIndex="999">
      <Flex
        h="10%"
        w="100%"
        alignItems="center"
        padding="16px 24px"
        justifyContent="center"
        overflow-x="hidden"
      >
        <Text mr="20px" fontSize="12px">
          Copyright 2024 - The Lady and Gents
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
