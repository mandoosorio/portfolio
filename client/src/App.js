import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Side from "./components/Side";

import './App.css';

function App() {
  return (
    <div>
      <Side />
      <div id='center' className="main center">
        <div className="mainInner">
          <div>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
