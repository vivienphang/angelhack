import { Box } from "@chakra-ui/react";
import UserNameAndBadges from "../components/UserNameAndBadges";
import Events from "../components/Events";
import { useEffect } from "react";
import { getGlobalLeaderboard, getLeaderboard } from "../../api/users";

const dataApiResult = {
  name: 'John Mayer',
  token: 30,
}
const Home = () => {
  return (
    <Box id="home-box" minH="80vh" w="100%">
      <UserNameAndBadges username={dataApiResult} />
      <Events username={dataApiResult} />
    </Box>
  );
};
export default Home;
