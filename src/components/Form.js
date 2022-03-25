import { useState } from "react";
import axios from "axios";

import "../css/Form.css";

function Form() {
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantFunFact, setApplicantFunFact] = useState("");

  // Helper function
  function onSubmit(event) {
    axios
      .get("https://hack-tech-app-endpoint.herokuapp.com/test", {
        params: {
          name: applicantName,
          email: applicantEmail,
          funfact: applicantFunFact,
        },
      })
      .then((res) => {
        console.log(res);
        alert("Application submitted!");
        setApplicantName("");
        setApplicantEmail("");
        setApplicantFunFact("");
      });

    event.preventDefault();
  }

  // Helper function to validate email using the heroku endpoint instead of default html input validation
  function validateEmail() {
    axios
      .get("https://hack-tech-app-endpoint.herokuapp.com/test", {
        params: {
          name: "test",
          email: applicantEmail,
          funfact: "test",
        },
      })
      .then(() => {
        document.getElementById("email").setCustomValidity("");
      })
      .catch(() => {
        document
          .getElementById("email")
          .setCustomValidity("Please enter a valid email.");
      });
  }

  return (
    <div className="inner-form-container">
      <h1 className="title">Hack UCI Application</h1>
      <form className="form" onSubmit={onSubmit}>
        <h3>Name</h3>
        <input
          placeholder="Name"
          value={applicantName}
          onChange={(newValue) => setApplicantName(newValue.target.value)}
          required
        ></input>
        <h3>Email</h3>
        <input
          id="email"
          placeholder="Email"
          value={applicantEmail}
          onChange={(newValue) => {
            setApplicantEmail(newValue.target.value);
            validateEmail();
          }}
          required
        ></input>
        <h3>Fun Fact</h3>
        <textarea
          className="fun-fact-input"
          placeholder="Fun Fact"
          value={applicantFunFact}
          onChange={(newValue) => setApplicantFunFact(newValue.target.value)}
          required
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
