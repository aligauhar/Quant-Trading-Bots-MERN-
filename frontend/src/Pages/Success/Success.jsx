import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { ThemeContext  } from "../../Theme";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();
  const { gradiant} = useContext(ThemeContext );
  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <>
      <section className="notFound"  style={{ 
  backgroundColor: `#4158D0`,
  backgroundImage: gradiant,
  backgroundSize: 'cover',
}}>
        <div className="container">
          <img className="success-logo"  src="/main.png" alt="success" />
          <h1 className="lost-test-wrapper" >Redirecting to Home in {countdown} seconds...</h1>
          <Link  to={"/"}>
            <div className="back-home">
            Back to Home <HiOutlineArrowNarrowRight />
            </div>
           
          </Link>
        </div>
      </section>
    </>
  );
};

export default Success;