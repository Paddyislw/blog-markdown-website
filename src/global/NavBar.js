import React from "react";
import { Link } from "react-router-dom";
import './Layout.css'

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <div>
        <Link to={"/"} className="navBtn">
          <h2 className="text-2xl font-bold">PennyPot</h2>
        </Link>
      </div>
      <div className=" space-x-4" style={{display:'flex',gap:'12px'}}>
        <Link to={"/create-blog"} className="navBtn">
          <p>Home</p>
        </Link>
        <Link to={"/create-blog"} className="navBtn">
          <p>Create A Blog?</p>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
