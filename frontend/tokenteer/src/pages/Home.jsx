import { Box } from "@chakra-ui/react";
import UserNameAndBadges from "../components/UserNameAndBadges";
import Events from "../components/Events";
import { useEffect, useState } from "react";
import { getProfile } from "../../api/users";
import Games from "../components/Games";

const Home = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const data = await getProfile();
    console.log(data);
    setUserData(data);
  }

  return (
    <Box id="home-box" minH="80vh" w="100%">
      <UserNameAndBadges username={userData} />
      <Events username={userData} />
      <Games />
    </Box>
  );
};
export default Home;
