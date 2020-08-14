import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pomodoro">Pomodoro</Link>
        </li>
        <li>
          <Link to="/relax">Relax</Link>
        </li>
        <li>
          <Link to="/meditate">Meditate</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
