import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

const Events = () => {
  // eslint-disable-next-line no-unused-vars
  const [pastEvents, setPastEvents] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [upcomingEvents, setUpcomingEvents] = useState(false);

  // TODO: Query upcoming API call

  return (
    <Flex width="100%" flex="1" padding="0px 24px 0px 24px" gap="14px">
      <Box
        id="upcoming-events"
        width="50%"
        borderRadius="20px"
        padding="14px 24px"
        bgColor="antiquewhite"
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
        minH="240px"
      >
        <Text id="upcoming-events-header" fontSize="24px" fontWeight="bold">
          UPCOMING EVENTS
        </Text>
        {upcomingEvents ? (
          <Text>Show upcoming events</Text>
        ) : (
          <Text>No upcoming events</Text>
        )}
      </Box>
      <Box
        id="past-events"
        width="50%"
        borderRadius="20px"
        padding="14px 24px"
        bgColor="antiquewhite"
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
      >
        <Text id="past-events-header" fontSize="24px" fontWeight="bold">
          PAST EVENTS
        </Text>
        {pastEvents ? (
          <Text mb={0}>Show past events</Text>
        ) : (
          <Text mb={0}>No past events</Text>
        )}
      </Box>
    </Flex>
  );
};

export default Events;
