import React, { useState } from "react";

const Contactpage = () => {
  const [inputValues, setInputValue] = useState({
    fName: "",
    lName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fName: "",
    lName: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValues, [name]: value });
    console.log(inputValues);
  };
  const handleSubmit = (e) => {
    console.log(inputValues.fName);
    if (inputValues.fName === "") {
      console.log(inputValues.fName);
      setErrors((errors) => ({ ...errors, fName: "Please enter a message" }));
    }
    if (inputValues.lName === "")
      setErrors((errors) => ({ ...errors, lName: "Please enter a message" }));
    if (inputValues.email === "")
      setErrors((errors) => ({ ...errors, email: "Please enter a message" }));
    if (inputValues.message === "")
      setErrors((errors) => ({ ...errors, message: "Please enter a message" }));
    
  };
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p className="title">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <div className="form">
        <div className="row name-wrapper">
          <div className="col first-name">
            <label>First Name</label>
            <input
              type="text"
              id="first_name"
              className={errors.fName ? "border-red" : null}
              name="fName"
              onChange={handleChange}
              placeholder="Enter your first name"
            />
            {errors.fName && <p className="error">{errors.fName}</p>}
          </div>
          <div className="col last-name">
            <label>Last Name</label>
            <input
              type="text"
              id="last_name"
              className={errors.lName ? "border-red" : null}
              name="lName"
              onChange={handleChange}
              placeholder="Enter your last name"
            />
            {errors.lName && <p className="error">{errors.lName}</p>}
          </div>
        </div>
        <div className="row">
          <div className="col last-name">
            <label>Email</label>
            <input
              type="email"
              id="email"
              className={errors.email ? "border-red" : ""}
              name="email"
              onChange={handleChange}
              placeholder="yourname@email.com"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>
        <div className="row">
          <label>Message</label>
          <textarea
            name="message"
            id="message"
            className={errors.message ? "border-red message" : "message"}
            rows="8"
            onChange={handleChange}
            placeholder="Send me a message and I'll reply you as soon as possible..."
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <div className="row check-wrapper">
          <input type="checkbox" name="" className="check" />
          <p className="check-info">
            You agree to providing your data to Luqman_A007 who may contact you.
          </p>
        </div>
        <div className="row">
          <button onClick={handleSubmit} id="btn__submit" className="btn_submit">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
