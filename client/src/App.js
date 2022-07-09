import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import Tech from "./pages/Tech";

import Side from "./components/Side";
import Footer from "./components/Footer";

function App() {
  return (
    <div>  
      <Router>
        <Side />
        <div id='center' className="main center">
          <div className="mainInner">
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/technologies" element={<Tech />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
