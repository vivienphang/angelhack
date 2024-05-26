import { Box, Image, Flex, Link } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Logo from "../assets/logos/main-logo.png"

const Navbar = () => {
  return (
    <Box>
      <Flex
        h="10%"
        w="100%"
        // bgColor="antiquewhite"
        alignItems="center"
        padding="16px 24px"
        justifyContent="space-between"
        overflow-x="hidden"
      >
        {/* <Text mr="14px" fontSize="20px" fontWeight="bold">
          Logo
        </Text> */}
        <Image src={Logo} alt="main-logo" boxSize="150px"/>
        <Flex>
          <Link pr="14px" href="/">
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
      <Box display="flex" justifyContent="center" w="100%" flex="1">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Navbar;
