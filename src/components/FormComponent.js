import React, { useState } from "react";

const FormComponent = () => {
  const [controlledName, setControlledName] = useState("");
  const [controlledEmail, setControlledEmail] = useState("");
  const [controlledMessage, setControlledMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateInputs = () => {
    let valid = true;
    if (!controlledName.trim()) {
      setNameError("Name is required");
      valid = false;
    } else {
      setNameError("");
    }
    if (!controlledEmail.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(controlledEmail)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateInputs()) {
      console.log("Form submitted successfully");
      setControlledName("");
      setControlledEmail("");
      setControlledMessage("");
      setNameError("");
      setEmailError("");
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="container mt-4 my-5">
      <h1 className="fw-bold fst-italic my-3">Day 7: Working with Forms </h1>
      <h2>Controlled Form with Validation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="controlledName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${nameError ? "is-invalid" : ""}`}
            id="controlledName"
            value={controlledName}
            onChange={(e) => setControlledName(e.target.value)}
          />
          {nameError && <div className="invalid-feedback">{nameError}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="controlledEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${emailError ? "is-invalid" : ""}`}
            id="controlledEmail"
            value={controlledEmail}
            onChange={(e) => setControlledEmail(e.target.value)}
          />
          {emailError && <div className="invalid-feedback">{emailError}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="controlledMessage" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="controlledMessage"
            value={controlledMessage}
            onChange={(e) => setControlledMessage(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
