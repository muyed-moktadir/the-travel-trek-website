import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import CustomLink from "../../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="header">
      <nav >
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/services">Services</CustomLink>
        <CustomLink to="/blog">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        {
          user?.uid ? (
            <button className="signout-btn" onClick={() => signOut(auth)}>sign Out</button>
          ) : (
            <CustomLink to="/login">Login</CustomLink>
          )  // <CustomLink to='/register'>register</CustomLink>
          
          //    
        }
      </nav>
    </div>
  );
};

export default Header;
