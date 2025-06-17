import React from 'react';
import './NewsletterToolkit.scss';
import toolkitImage from '../images/image.webp';

const NewsletterToolkit = () => {
  return (
    <div className="newsletter-wrapper">
      <div className="left-content">
        The Design Declares Newsletter <br/>and Toolkit
      </div>

      <div className="right-content">
        <div className="image-preview">
          <img src={toolkitImage} alt="Toolkit Preview" />
        </div>

        <p className="description">
          Subscribe to the Design Declares UK newsletter to receive the latest news and updates.
          By signing up you will also gain access to The Design Declares Toolkit, a live and
          evolving Notion site co-created with our community. It is filled with the latest resources
          and methods to help you on your journey to climate-positive design.
        </p>

        <p className="note">
          Every signatory to Design Declares will receive an access link to the Toolkit.
          If you are unable to declare emergency quite yet, you can still access the Toolkit -
          just register below.
        </p>

        <form className="newsletter-form">
          <input type="email" placeholder="Email:*" required />

          <div className="checkbox-line">
            <input type="checkbox" id="subscribe" />
            <label htmlFor="subscribe">
              I would like to be added to the Design Declares! newsletter and receive further updates.
            </label>
          </div>

          <a href="#" className="privacy-link">View our Privacy Policy</a>

          <button type="submit" className="submit-btn">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterToolkit;
