import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import Tech from "./pages/Tech";

import Side from "./components/Side";
import Footer from "./components/Footer";

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
              <Route path="/technologies" element={<Tech />} />
            </Routes>
          </Router>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
