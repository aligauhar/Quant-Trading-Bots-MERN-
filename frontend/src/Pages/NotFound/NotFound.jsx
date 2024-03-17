import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { ThemeContext  } from "../../Theme";

const NotFound = () => {
  const { gradiant} = useContext(ThemeContext );
  return (
    <>
      <section className="notFound"
      style={{ 
        backgroundColor: `#4158D0`,
        backgroundImage: gradiant,
        backgroundSize: 'cover',
      }}>
        <div className="container">
          <img className="success-logo" src="/main.png" alt="notFound" />
          <h1 className="lost-test-wrapper" >LOOKS LIKE YOU'RE LOST</h1>
          <Link to={"/"}>
            <div className="back-home">
            Back to Home{" "}
      
      <HiOutlineArrowNarrowRight />
            </div>
            
         
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
