import { useState, useContext } from "react";
import UserContext from "./components/providers/UserContext";
import Card from ""
const CreateAccount = () => {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ctx = useContext(UserContext);
  const [isFormValid, setIsFormValid] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  function validate(field, label) {
    if (!field) {
      setStatus("Please enter your " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function validatePassword(value) {
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return false;
    }
    setPasswordError("");
    return true;
  }

  function handleInputChange(e) {
    // Enable the submit button if any field has content
    setIsFormValid(!!name || !!email || !!password);

    // Clear the status message when the user starts typing
    setStatus("");

    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
      validatePassword(value);
    }
  }

  function handleCreate() {
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validatePassword(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
    setPasswordError("");
  }

  return (
    <div className="card-container">
      <Card
        bgcolor="primary"
        header="Create Account"
        status={status}
        body={
          show ? (
            <>
              Name
              <br />
              <input
                type="input"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter name"
                value={name}
                onChange={handleInputChange}
              />
              <br />
              Email address
              <br />
              <input
                type="input"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={handleInputChange}
              />
              <br />
              Password
              <br />
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={handleInputChange}
              />
              {passwordError && (
                <div className="text-danger">{passwordError}</div>
              )}
              <br />
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleCreate}
                disabled={!isFormValid}
              >
                Create Account
              </button>
            </>
          ) : (
            <>
              <h5>Success</h5>
              <button
                type="submit"
                className="btn btn-light"
                onClick={clearForm}
              >
                Add another account
              </button>
            </>
          )
        }
      />
    </div>
  );
}

export default CreateAccount;