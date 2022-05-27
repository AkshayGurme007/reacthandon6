import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="head">
      <Link to="/home" className="nav">
        {/* {" "} */}
        HOME
        {/* {" "} */}
      </Link>
      <Link to="/student" className="nav">
        {/* {" "} */}
        STUDENTS
        {/* {" "} */}
      </Link>
      <Link to="/contact" className="nav">
        {/* {" "} */}
        CONTACT US
        {/* {" "} */}
      </Link>
    </div>
  );
};

export default Nav;
