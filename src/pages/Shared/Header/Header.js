import React from "react";
import CustomLink from "../../CustomLink/CustomLink";
import './Header.css'
import logo from '../../../images/logo.png'
const Header = () => {
  return (
    <div className="header">
      <nav>
        <CustomLink to="/"><span>Home</span></CustomLink>
        <CustomLink to="/services">Services</CustomLink>
        <CustomLink to="/blog">Blog</CustomLink>
        <CustomLink to="about">About</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
