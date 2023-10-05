import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Touch from "./pages/Touch";
import Destiny from "./pages/Destiny";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/touch" element={<Touch />} />
        <Route path="/destiny" element={<Destiny />} />
      </Routes>
    </>
  );
}

export default App;
