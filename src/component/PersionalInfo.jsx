import React, { useState } from "react";
import "./PersionalInfo.css";

import ImageField from "./ImageUploader";

function PersionalInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [objective, setObjective] = useState("");
  const [image, setImage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    // Code to handle form submission
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    setImage(file);
  }

  return (
    <div className="body">
      
      <form onSubmit={handleSubmit}>
        
        <ImageField />

        {/* ------ */}

        <div className="info">
          <label className="column">
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          {/* <br /> */}
          <label className="column">
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          {/* <br /> */}
          <label className="column">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          {/* <br /> */}
          <label className="column">
            Mobile Number:
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </label>
          {/* <br /> */}
        </div>
        {/* ---------------------- */}

        <label className="column" id="adress">
          Address:
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        
        {/* ------ */}
        <div className="info">
          <label className="column">
            City:
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
          
          <label className="column" style={{ marginLeft: "70px" }}>
            State:
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </label>
        
          <label className="column">
            Postal Code:
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </label>

        </div>
        <label className="column">
          Objective:
          <textarea
            style={{ height: "150px" }}
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
          />
        </label>
        <label>
          <button type="submit">Back</button>
          <button type="next">Next</button>
        </label>
      </form>
    </div>
  );
}

export default PersionalInfo;
