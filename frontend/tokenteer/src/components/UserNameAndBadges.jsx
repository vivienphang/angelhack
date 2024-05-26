import { Box, Flex, Text, Image } from "@chakra-ui/react";

const UserNameAndBadges = ({ username }) => {
  const { token, name } = username; // Destructure for easier access
  const BADGES = {
    EXPLORER: "explorer",
    VOYAGES: "voyages",
    NAVIGATOR: "navigator",
    ADVENTURER: "adventurer",
    PIONEER: "pioneer",
    NONE: "none",
  };
  let badgeKey;

  // Determine the badge key based on token range
  if (token >= 100) {
    badgeKey = "PIONEER";
  } else if (token >= 75) {
    badgeKey = "ADVENTURER";
  } else if (token >= 50) {
    badgeKey = "NAVIGATOR";
  } else if (token >= 35) {
    badgeKey = "VOYAGES";
  } else if (token >= 20) {
    badgeKey = "EXPLORER";
  } else {
    badgeKey = "NONE";
  }

  // Switch statement to assign the badge based on the determined badgeKey
  let badge;
  switch (badgeKey) {
    case "PIONEER":
      return (
      <Image />
      );
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
      <Box id="userBadgeAndToken" width="50%" borderRadius="20px" padding="24px" bgColor="antiquewhite" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)">
        <Text mb={0} fontWeight="bold">
          Level: {badge.toUpperCase()}
        </Text>
        <Text fontWeight="bold">Token: {token} </Text>
      </Box>
    </Flex>
  );
};

export default UserNameAndBadges;
