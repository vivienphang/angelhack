import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Box } from "@chakra-ui/react";

const App = () => {
  return (
    <BrowserRouter>
      <Box>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
