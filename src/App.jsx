import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import Home from './Home.jsx'
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Contact from "./Contact.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App