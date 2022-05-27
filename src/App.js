import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Students from "./components/Students";
import Contact from "./components/Contact";
import { Studentdata } from "./components/Studentdata";
import Home from "./components/Home";
import Update from "./components/Update";
import Addstudent from "./components/Addstudent";
import Nav from "./components/Nav";

function App() {
  return (
    <Studentdata>
      <div className="App">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/student" element={<Students />} />
            <Route path="/student/add/:id" element={<Addstudent />} />
            <Route path="/student/edit/:id" element={<Update />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </Studentdata>
  );
}

export default App;
