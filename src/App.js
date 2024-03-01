import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./test/Home.jsx";
import Test from "./test/Test.jsx";
import Test2 from "./test/Test2.jsx";
import Test3 from "./test/Test3.jsx";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test3" element={<Test3 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
