const Deposit = () => {
    let deposit = 0; // state of this transaction
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
    const [activeButton, setActiveButton] = React.useState("deposit");
  
    let status = `Account Balance $ ${totalState} `;
  
    const ATMDeposit = ({ onChange, isDeposit }) => {
      const choice = ["Deposit", "Cash Back"];
      console.log(`ATM isDeposit: ${isDeposit}`);
      return (
        <label className="label huge">
          <h3> {choice[Number(!isDeposit)]}</h3>
          <input type="number" width="200" onChange={onChange}></input>
          <input id="submit" type="submit" width="200" value="Submit"></input>
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
  
    const handleSubmit = (event) => {
      let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
      setTotalState(newTotal);
      if (newTotal < 0) {
        alert("Cannot withdraw funds, account balance too low");
        return;
      }
      event.preventDefault();
    };
  
    const handleAmountSelect = (amount) => {
      deposit = amount;
    };
  
    const handleButtonClick = (type) => {
      setIsDeposit(type === "deposit");
      setActiveButton(type);
    };
  
    return (
      <>
        <div className="deposit-container">
          <form onSubmit={handleSubmit}>
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
            <ATMDeposit
              onChange={handleChange}
              isDeposit={isDeposit}
            ></ATMDeposit>
            <PresetAmountButtons onAmountSelect={handleAmountSelect} />
          </form>
        </div>
      </>
    );
  };

  export default Deposit;