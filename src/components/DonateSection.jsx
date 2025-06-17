import React from 'react';
import './DonateSection.scss';

const DonateSection = () => {
  return (
    <section className="donate-section">
      <div className="donate-left">
        Donate to D!
      </div>

      <div className="donate-right">
        <div className='donate-desc'>
          Design Declares is a CIC and would not exist without our dedicated team of co-steers,
          volunteers, and our passionate community working towards change in the creative industry.
          Your support can go a long way, and helps us too continue the valuable work needed in
          tackling the climate crises. If you believe in the work we do, please consider a small
          donation to help us on our journey for a more equitable and just planet.
        </div>

        <div className="donation-buttons">
          <button>Donate £10</button>
          <button>Donate £20</button>
          <button>Donate £50</button>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
