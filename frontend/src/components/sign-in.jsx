import React, { useEffect, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import initializeFirebase from "../service/firebase";
import { FaRocket, FaSignOutAlt } from "react-icons/fa";
import BotSelectionPopup from "./BotSelectionPopup";
import "./css/HeroSection.css";
import Popup from "./BotSelectionPopup";

function SignIn() {
  const [email, setEmail] = useState("");
  const [showBotSelection, setShowBotSelection] = useState(false);
  const [auth, setAuth] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    initializeFirebase()
      .then(({ auth, provider }) => {
        setAuth(auth);
        setProvider(provider);
      })
      .catch(error => {
        console.error('Error initializing Firebase:', error);
      });
  }, []);

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    if (userEmail) {
      setEmail(userEmail);
    }
  }, []);

  const handleClickIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const userEmail = data.user.email;
        setEmail(userEmail);
        localStorage.setItem("email", userEmail);
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  };

  const handleSignOut = () => {
    const confirmed = window.confirm("Are you sure you want to sign out?");
    if (confirmed) {
      localStorage.removeItem("email");
      setEmail("");
    }
  };

  const openBotSelectionPopup = () => {
    setShowBotSelection(true);
  };

  const closeBotSelectionPopup = () => {
    setShowBotSelection(false);
  };

  return (
    <div>
      {email ? (
        <>
          <button className="connect-wallet-btn" onClick={handleSignOut}>
            <FaSignOutAlt className="FaWallet" /> Sign Out
          </button>
          {/* <Popup/> */}
          {/* <button className="connect-wallet-btn" onClick={openBotSelectionPopup}>
            Manage
          </button> */}
          { <BotSelectionPopup email={email} onClose={closeBotSelectionPopup} />}
        </>
      ) : (
        <button className="connect-wallet-btn" onClick={handleClickIn}>
          <FaRocket /> Let's Go
        </button>
      )}
    </div>
  );
}

export default SignIn;
