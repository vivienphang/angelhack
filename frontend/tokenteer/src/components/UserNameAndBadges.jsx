import { Box, Flex, Text } from "@chakra-ui/react";

const UserNameAndBadges = ({ username }) => {
  const { token, name } = username; // Destructure for easier access
  const BADGES = {
    EXPLORER: 'explorer',
    VOYAGES: 'voyages',
    NAVIGATOR: 'navigator',
    ADVENTURER: 'adventurer',
    PIONEER: 'pioneer',
    NONE: 'none'
  }
  return (
    <Flex width="100%">
      <Box id="welcome-user" width="50%">
        <Text fontWeight="bold">Hello, {name}!</Text>
      </Box>
      <Box width="50%">
        <Text mb={0} fontWeight="bold">Level: </Text>
        <Text fontWeight="bold">Token: {token} </Text>
      </Box>
    </Flex>
  );
};

export default UserNameAndBadges;
