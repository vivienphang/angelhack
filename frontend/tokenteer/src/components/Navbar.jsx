import { Box, Text, Flex, Link } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <Box>
      <Flex
        h="50px"
        w="100%"
        bgColor="antiquewhite"
        alignItems="center"
        padding="16px 24px"
        justifyContent="space-between"
        overflow-x="hidden"
      >
        <Text mr="14px" fontSize="20px" fontWeight="bold">
          Logo
        </Text>
        <Flex>
          <Link pr="14px" href="/home">
            Home
          </Link>
          <Link pr="14px" href="/listings">
            Listings
          </Link>
          <Link pr="14px" href="/leaderboard">
            Leaderboard
          </Link>
          <Link pr="14px" href="/rewards">
            Rewards
          </Link>
        </Flex>
      </Flex>
      <Box display="flex" justifyContent="center" w="100%">
          <Outlet />
      </Box>
    </Box>
  );
};

export default Navbar;
