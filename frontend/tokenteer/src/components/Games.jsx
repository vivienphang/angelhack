import { Box, Flex, Text } from "@chakra-ui/react";

const Games = () => {

  return (
    <Flex width="100%"  padding="24px">
      <Box id="upcoming-events" width="100%" height="100%" borderRadius="20px" padding="14px 24px" bgColor="antiquewhite" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)">
        <Text fontSize="24px" textAlign="center"><b>GAMES</b> <i>(Future development)</i></Text>
      </Box>
    </Flex>
  );
};

export default Games;
