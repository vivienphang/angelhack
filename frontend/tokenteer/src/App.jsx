import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Listings from './pages/Listings'
import Leaderboard from "./pages/Leaderboard";
import Rewards from "./pages/Rewards";
import { Box } from "@chakra-ui/react";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/rewards" element={<Rewards />} />
        </Routes>
      </Box>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
