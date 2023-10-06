import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Touch from "./pages/Touch";
import Destiny from "./pages/Destiny";

import useBadinContext from "./context";

function App() {
  const { questionNo, pinNo } = useBadinContext();

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/touch"
          element={questionNo ? <Touch /> : <Navigate to={"/"} />}
        />

        <Route
          path="/destiny"
          element={questionNo && pinNo ? <Destiny /> : <Navigate to={"/"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
