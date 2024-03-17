import React, { useState } from "react";
import { FaMoneyCheck } from "react-icons/fa";
import axios from "axios";
import data from "../../src/restApi.json";

const BotSelectionPopup = ({ email, onClose }) => {
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [selectedBots, setSelectedBots] = useState([]);
  const [botPercentages, setBotPercentages] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message

  const handleBotSelect = (bot) => {
    setSelectedBots((prevSelectedBots) => [...prevSelectedBots, bot]);
  };

  const handlePercentageChange = (bot, percentage) => {
    const totalPercentage =
      Object.values(botPercentages).reduce((acc, val) => acc + val, 0) +
      percentage;

    if (totalPercentage === 100) {
      setBotPercentages((prevBotPercentages) => ({
        ...prevBotPercentages,
        [bot]: percentage,
      }));
      setErrorMessage("");
    } else {
      setErrorMessage("Total percentage must be 100%");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      selectedBots,
      botPercentages,
      investmentAmount,
    };

    try {
      const response = await axios.post(
        data.BACKEND_URL + "api/v1/popup/send",
        formData
      );
      console.log(response.data);
      setErrorMessage("");
      setSuccessMessage(response.data.message); // Set success message received from backend
      onClose(); // Close the popup after successful submission
    } catch (error) {
      console.error("Error sending form data:", error);
      setErrorMessage("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <form className="mb-6" onSubmit={handleSubmit}>
          <h2>Bot Selection</h2>
          <div>
            <label>Email: {email}</label>
          </div>
          <div>
            <div>
              <label>Investment:</label>
              <input
                className="investment-label"
                type="number"
                placeholder="Enter investment amount"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(e.target.value)}
                required
              />
            </div>
            <label>Select Bots: </label>
            <select onChange={(e) => handleBotSelect(e.target.value)}>
              <option value="">Select Bot</option>
              <option value="Bot 1">Bot 1</option>
              <option value="Bot 2">Bot 2</option>
              <option value="Bot 3">Bot 3</option>
            </select>
          </div>
          {selectedBots.map((bot) => (
            <div key={bot}>
              <label>{bot}</label>
              <input
                type="number"
                placeholder="Enter investment percentage"
                onChange={(e) =>
                  handlePercentageChange(bot, parseInt(e.target.value))
                }
              />
            </div>
          ))}
          {errorMessage && <div className="error alert alert-danger">{errorMessage}</div>}
          {successMessage && <div className="success alert alert-success">{successMessage}</div>} {/* Display success message */}
          <button type="submit">
            <FaMoneyCheck /> Checkout
          </button>
          {/* <button onClick={onClose}>Close</button> */}
        </form>
      </div>
    </div>
  );
};

export default BotSelectionPopup;
