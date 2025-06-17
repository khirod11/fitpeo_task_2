import React from "react";
import "./DeclareEmergencyForm.scss";

const DeclareEmergencyForm = () => {
  return (
    <div className="declare-emergency-container">
      <div className="left-pane">
        Declare Emergency Now
      </div>
      <div className="right-pane">
        <div className="right-desc">
          Design Declares is open to individuals and institutions working in
          industrial, digital, graphic, communication and service design. To
          declare here, you must be a company with an office in the UK employing
          at least one full-time designer. We also welcome declarations from
          practising freelance designers who are registered as self-employed in
          the UK, and global supporters from other countries. All declarations
          will be named and published on this site.
        </div>


        <form>
          {/* Role selection */}
        <h2>I am Declaring Emergency</h2>
          <div className="roles">
            <label>
              <input type="checkbox" /> As a business
            </label>
            <label>
              <input type="checkbox" /> As an individual
            </label>
            <label>
              <input type="checkbox" /> As a public institution
            </label>
            <label>
              <input type="checkbox" /> As a team or department
            </label>
          </div>

          {/* Input fields */}
          <input type="text" placeholder="Website:*" required />
          <select required>
            <option value="">Country:*</option>
            <option value="uk">United Kingdom</option>
            {/* Add more countries */}
          </select>
          <input type="text" placeholder="Discipline:*" required />
          <input type="email" placeholder="Email:*" required />
          <textarea
            placeholder="Why are you declaring? In a sentence or two, tell us why you're joining Design Declares."
            rows="8"
            required
          ></textarea>

          {/* Checkboxes */}
          <div className="checkboxes">
            <label>
              <input type="checkbox" />I consent for my data to be used for the purpose of the Declaration, and for my name and reason for joining to be used in the promotion of the Declaration on this site and across our social channels.
            </label>
            <label>
              <input type="checkbox" /> I would like to be added to the Design Declares! newsletter and receive further updates.
            </label>
          </div>

          <a href="#">View our Privacy Policy</a>
          <button type="submit">Declare Emergency Now</button>
        </form>
      </div>
    </div>
  );
};

export default DeclareEmergencyForm;
