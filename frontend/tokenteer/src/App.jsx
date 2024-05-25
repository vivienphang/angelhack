// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import { Box } from "@chakra-ui/react";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Box>
//         <Routes>
//           <Route path="/" element={<Navbar />}>
//             <Route index element={<Home />} />
//           </Route>
//         </Routes>
//       </Box>
//     </BrowserRouter>
//   );
// };

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Box } from "@chakra-ui/react";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar is placed outside the Routes */}
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Additional routes go here */}
          {/* <Route path="/listings" element={<Listings />} /> */}
          {/* <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/rewards" element={<Rewards />} /> */}
        </Routes>
      </Box>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
