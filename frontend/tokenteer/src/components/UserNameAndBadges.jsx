import { Box, Flex, Text } from "@chakra-ui/react";

const UserNameAndBadges = ({ username }) => {
  const { tokens, name } = username; // Destructure for easier access
  const BADGES = {
    EXPLORER: "explorer",
    VOYAGES: "voyages",
    NAVIGATOR: "navigator",
    ADVENTURER: "adventurer",
    PIONEER: "pioneer",
    NONE: "none",
  };
  let badgeKey; // This will be used to select the case in the switch statement

  // Determine the badge key based on tokens range
  if (tokens >= 100) {
    badgeKey = "PIONEER";
  } else if (tokens >= 75) {
    badgeKey = "ADVENTURER";
  } else if (tokens >= 50) {
    badgeKey = "NAVIGATOR";
  } else if (tokens >= 35) {
    badgeKey = "VOYAGES";
  } else if (tokens >= 20) {
    badgeKey = "EXPLORER";
  } else {
    badgeKey = "NONE";
  }

  // Switch statement to assign the badge based on the determined badgeKey
  let badge;
  switch (badgeKey) {
    case "PIONEER":
      badge = BADGES.PIONEER;
      break;
    case "ADVENTURER":
      badge = BADGES.ADVENTURER;
      break;
    case "NAVIGATOR":
      badge = BADGES.NAVIGATOR;
      break;
    case "VOYAGER":
      badge = BADGES.VOYAGES;
      break;
    case "EXPLORER":
      badge = BADGES.EXPLORER;
      break;
    default:
      // eslint-disable-next-line no-unused-vars
      badge = BADGES.NONE;
  }

  return (
    <Flex width="100%" height="50%" padding="24px" gap="14px">
      <Box id="welcome-user" width="50%" borderRadius="20px" padding="24px" bgColor="antiquewhite" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)">
        <Text fontWeight="bold">Hello, {name}!</Text>
      </Box>
      <Box id="userBadgeAndtokens" width="50%" borderRadius="20px" padding="24px" bgColor="antiquewhite" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)">
        <Text mb={0} fontWeight="bold">
          Level: {badge.toUpperCase()}
        </Text>
        <Text fontWeight="bold">tokens: {tokens} </Text>
      </Box>
    </Flex>
  );
};

export default UserNameAndBadges;
