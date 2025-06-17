import React, { useState } from 'react';
import './BreakdownSection.scss';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const sections = [
  {
    title: 'The Role of Design',
    content: [
      `As designers working within an industry that relies on production and powers global consumption, we must acknowledge that we have had a role in bringing us to where we are now, and that we have an important role in what comes next.`,
      `Because designers are makers. We make ideas real. We generate solutions. We build the world - dreaming up new futures and bringing them to life in ways that are beautiful, vital and impossible to resist. It's not quite magic, but it feels like it.`
    ]
  },
  {
    title: 'Time for Change',
    content: [
      `Together with our clients, partners and colleagues across the supply chain, we are daring to reimagine the way we create every product, service, campaign and designed solution we put out into the world.`,
      `This means measuring and actively reducing the greenhouse gas emissions and resource use linked to our designs.`,
      `It means introducing principles of sustainability, circularity and - ultimately - regenerative design into our practice to recapture and repurpose resources and materials.`,
      `And it means acting systemically - seeing the bigger picture and working with others to sharpen design's incredible capacity to influence and accelerate climate repair and justice.`
    ]
  },
  {
    title: 'Act with Urgency',
    content: [
      `We know all we need to make this a reality. The information, the guidance, the inspiration and solutions are there. What design needs now is action - meaningful steps that can begin to connect what we know to what we do.`,
      `This is the most important brief of our lives. Join us as we begin to design a climate-positive future.`
    ]
  }
];

const BreakdownSection = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="breakdown">
      <div className="breakdown__left">
        This is Breakdown
      </div>

      <div className="breakdown__right">
        <div className="headline">
          The science is settled. We are in an emergency of climate and nature.
          The world is past breaking point; the breakdown has begun...
        </div>

        {sections.map((section, index) => (
          <div key={index} className="collapsible">
            <div className="title" onClick={() => toggleSection(index)}>
              {section.title}
              <span className="icon">
                {openSections[index] ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {openSections[index] && (
              <div className="content">
                <div className="grid">
                  {section.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        <button className="video-btn">View our D! Intro Video</button>
      </div>
    </div>
  );
};

export default BreakdownSection;
