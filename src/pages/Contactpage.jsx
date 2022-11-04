import React from "react";

const Contactpage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p className="title">Hi there, contact me to ask me about anything you have in mind.</p>
      <div className="form">
        <div className="row name-wrapper">
          <div className="col first-name">
            <label>First Name</label>
            <input type="text" id="first_name" placeholder="Enter your first name" />
          </div>
          <div className="col last-name">
            <label>Last Name</label>
            <input type="text" id="last_name" placeholder="Enter your last name"/>
          </div>
        </div>
        <div className="row">
          <div className="col last-name">
            <label>Email</label>
            <input type="email" id="email" placeholder="yourname@email.com"/>
          </div>
        </div>
        <div className="row">
            <label>Message</label>
            <textarea name="" id="message" rows="8" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
        </div>
        <div className="row check-wrapper">
        <input type="checkbox" name="" className="check" />
        <p className="check-info">You agree to providing your data to "name" who may contact you.</p>
        </div>
        <div className="row">
            <button id="btn_submit">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
