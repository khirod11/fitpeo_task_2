import React from "react";
import "./ActsOfEmergency.scss";

const acts = [
  {
    number: "1",
    title: "Sound the Alarm",
    description:
      "Acknowledge and raise awareness of the climate and ecological crisis - including its roots in systems of oppression - in our organisations and our practice.",
  },
  {
    number: "2",
    title: "Start the Journey",
    description:
      "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start.",
  },
  {
    number: "3",
    title: "Bring Clients with Us",
    description:
      "Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress.",
  },
  {
    number: "4",
    title: "Measure What We Make",
    description:
      "Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out.",
  },
  {
    number: "5",
    title: "Redefine 'Good'",
    description:
      "Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards.",
  },
  {
    number: "6",
    title: "Educate, Accelerate",
    description:
      "Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry.",
  },
  {
    number: "7",
    title: "Design for Justice",
    description:
      "Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world.",
  },
  {
    number: "8",
    title: "Amplify Voices for Change",
    description:
      "Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change.",
  },
];

const ActsOfEmergency = () => {
  return (
    <div className="acts-section">
      <div className="acts-left">
        8 Acts of Emergency
      </div>
      <div className="acts-right">
        <div className="intro">
          What does it take to Declare? It's accepting we are in an emergency of
          climate and nature, and a commitment to do something about it. Here
          are eight places to start:
        </div>
        <div className="acts-list">
          {acts.map((act) => (
            <div key={act.number} className="act-box">
              <div className="act-top-row">
                <div className="act-number">{act.number}</div>
                <div className="act-title">{act.title}</div>
              </div>
              <div className="act-description">{act.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActsOfEmergency;
