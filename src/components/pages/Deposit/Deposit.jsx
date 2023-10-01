import { react, useState } from "react";

const Deposit = () => {
    let deposit = 0; // state of this transaction
    const [totalState, setTotalState] = useState(0);
    const [isDeposit, setIsDeposit] = useState(true);
    const [activeButton, setActiveButton] = useState("deposit");
    const [inputValue, setInputValue] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
  
    let status = `Account Balance $ ${totalState} `;
  
    const ATMDeposit = ({ onChange, isDeposit }) => {
      const choice = ["Deposit", "Cash Back"];
      console.log(`ATM isDeposit: ${isDeposit}`);
      return (
        <label className="label huge">
          <h3> {choice[Number(!isDeposit)]}</h3>
          <input
            type="number"
            width="200"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setAlertMessage("");
            }}
          ></input>
          <input
            id="submit"
            type="button"
            width="200"
            value="Submit"
            onClick={handleSubmit}
            disabled={!inputValue}
          ></input>
        </label>
      );
    };
  
    const PresetAmountButtons = ({ onAmountSelect }) => {
      const amounts = [20, 40, 60, 80, 100, 200];
  
      return (
        <div>
          {amounts.map((amount) => (
            <button
              id="preset-amounts"
              key={amount}
              onClick={() => onAmountSelect(amount)}
            >
              ${amount}
            </button>
          ))}
        </div>
      );
    };
  
    const handleChange = (event) => {
      deposit = Number(event.target.value);
    };
  
    const handleSubmit = () => {
      if (isNaN(inputValue)) {
        setAlertMessage("Please enter a valid number.");
      } else if (Number(inputValue) < 0) {
        setAlertMessage("Cannot deposit or withdraw a negative amount.");
      } else {
        deposit = Number(inputValue);
        let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
        setTotalState(newTotal);
        if (newTotal < 0) {
          setAlertMessage("Cannot withdraw funds, account balance too low");
          setTotalState(totalState);
        } else {
          // Set success message based on the transaction type
          setSuccessMessage(
            `Your ${isDeposit ? "deposit" : "withdrawal"} was successful.`
          );
          // Clear the input field
          setInputValue("");
        }
      }
    };
  
    const handleAmountSelect = (amount) => {
      setInputValue(amount);
      setSuccessMessage("");
      setAlertMessage("");
    };
  
    const handleButtonClick = (type) => {
      setIsDeposit(type === "deposit");
      setActiveButton(type);
      setAlertMessage("");
      setSuccessMessage("")
    };
  
    return (
      <>
        <div className="deposit-container">
          <form>
            <h2 id="total">{status}</h2>
            <button
              className={`btn ${
                activeButton === "deposit" ? "active-button" : ""
              }`}
              onClick={() => handleButtonClick("deposit")}
            >
              Deposit
            </button>
            <button
              className={`btn ${
                activeButton === "withdraw" ? "active-button" : ""
              }`}
              onClick={() => handleButtonClick("withdraw")}
            >
              Withdrawal
            </button>
            <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
            <PresetAmountButtons onAmountSelect={handleAmountSelect} />
          </form>
          {alertMessage && <div className="alert alert-danger">{alertMessage}</div>}
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
        </div>
      </>
    );
  };

  export default Deposit;
  