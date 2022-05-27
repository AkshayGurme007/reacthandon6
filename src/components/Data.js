import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Contact from "./Contact";
import Students from "./Students";
import Studentadd from "./Addstudent";
import { Student } from "./Studentdata";

function Data() {
  return (
    <Student>
      <div className="App">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/student" element={<Students />} />
            <Route path="/student-add" element={<Studentadd />} />
            <Route path="/student-add/:id" element={<Studentadd />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </Student>
  );
}

export default Data;
