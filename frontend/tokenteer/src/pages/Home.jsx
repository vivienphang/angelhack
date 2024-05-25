import { Box } from "@chakra-ui/react";
import UserNameAndBadges from "../components/UserNameAndBadges";

const dataApiResult = {
  name: 'John Mayer',
  token: 30,
}
const Home = () => {
  return (
    <Box id="home-box" bgColor="lightgrey" minH="80vh" minW="100vw">
      <UserNameAndBadges username={dataApiResult} />
    </Box>
  );
};
export default Home;
