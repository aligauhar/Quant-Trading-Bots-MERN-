import React, { useContext } from "react";
import data from "../restApi.json"
import { FaLink } from 'react-icons/fa';
import "./css/footer.css";
import { Link } from 'react-router-dom'; 
const Footer = () => {
  return (
    <div className="footer row">
      <div className="col-md-1">

      </div>
      <div className="footer-left footer-row col-md-4 ">
        <img src="main.PNG" alt="" />
        <p>
          {data.leftSideText}
        </p>
      </div>

      <div className=" col-md-1">
        <p className="break-footer" />

      </div>

      <div className="footer-right footer-row col-md-5">
        <h2>
          <FaLink /> Quick Navigation
          
        <div className="footerlinks">
        <Link className="footer-link" to="/">Home</Link>
        <Link className="footer-link" to="/about">About</Link>
        </div>
        </h2>
      </div>
      <div className="col-md-1">


    </div>
    </div >
  );
};

export default Footer;





