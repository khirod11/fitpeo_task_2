import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './LatestSection.scss';

const latestData = [
  {
    tags: ['Events', 'D! UK'],
    datetime: '24.04.2025, 03 PM:30',
    title: 'SD4P Collective: How can Service Design drive meaningful sustainability impact',
    recap: 'Recap: SD4P Collective working session - 28th March 2025',
    link: '#'
  },
  {
    tags: ['Events', 'D! UK'],
    datetime: '06.12.2024, 02 PM:30',
    title: 'Designing Tomorrow: Speculative Thinking Shapes Our Present',
    recap: 'Design Declares\' November Event Challenges Perspectives on Sustainability and Innovation',
    link: '#'
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const LatestSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '-100px 0px',
    once: false // <— this is key to allow repeat animations
  });

  return (
    <div className="latest-wrapper">
      <div className="left-side">
        Latest
      </div>

      <motion.div
        className="right-side"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {latestData.map((item, index) => (
          <motion.div className="latest-item" key={index} variants={itemVariants}>
            <div className="meta-line">
              {item.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
              <span className="date">{item.datetime}</span>
            </div>

            <div className="content-line">
              <div className="title">{item.title}</div>
              <div className="recap">
                <p>{item.recap}</p>
                <a href={item.link}>Read story</a>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.button className="see-all-btn" variants={itemVariants}>
          See all the latest
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LatestSection;
