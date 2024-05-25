import { Box, Flex, Text } from "@chakra-ui/react";

const Events = () => {
  // Query events API call

  return (
    <Flex width="100%" height="50%" padding="0px 24px 24px 24px" gap="14px">
      <Box id="upcoming-events" width="50%" borderRadius="20px" padding="14px 24px" bgColor="antiquewhite" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)">
        <Text id="upcoming-events-header" fontSize="24px" fontWeight="bold">UPCOMING EVENTS</Text>
        <Text>No upcoming events</Text>
      </Box>
      <Box id="past-events" width="50%" borderRadius="20px" padding="14px 24px" bgColor="antiquewhite" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)">
        <Text id="past-events-header" fontSize="24px" fontWeight="bold">PAST EVENTS</Text>
        <Text mb={0}>
          No past events
        </Text>
        {/* <Text fontWeight="bold">Token: {token} </Text> */}
      </Box>
    </Flex>
  );
};

export default Events;
