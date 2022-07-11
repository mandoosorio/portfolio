import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import Tech from "./pages/Tech";

import Side from "./components/Side";
import Footer from "./components/Footer";
import Companies from "./pages/Companies";
import Servicenow from "./pages/Servicenow";
import About from "./pages/About";
import Contact from "./pages/Contact";


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
                <Route path="/companies" element={<Companies />} />
                <Route path="/servicenow" element={<Servicenow />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
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
