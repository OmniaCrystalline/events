/** @format */
import "./Header.style.css";
import React from "react";
import { Link } from "react-router-dom";
import Search from "../search/Search";

const Header = () => {
  return (
    <header className='header container'>
      <h1>
        <Link to='/' className='logo'>
          Event Planner
        </Link>
      </h1>
      <Search />
    </header>
  );
};

export default Header;
