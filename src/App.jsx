import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import HouseDetail from "./Pages/HouseDetail/HouseDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uy/:id" element={<HouseDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;