import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const logoVariant = () => {
  return {
    hidden: {
      y: -50,
      x: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: 0.5,
      },
    },
  };
};

const jobVariant = () => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: 0.5,
      },
    },
  };
};

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export const Timeline = ({ experiences, openModal }) => {
  const timelineRef = useRef(null);
  const sortedExperiences = [...experiences].sort(
    (a, b) =>
      new Date(b.period.split(" - ")[0]) - new Date(a.period.split(" - ")[0])
  );

  const startDate =
    sortedExperiences[sortedExperiences.length - 1].period.split(" - ")[0];
  const endDate = sortedExperiences[0].period.split(" - ")[1] || "Present";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems =
      timelineRef.current.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <motion.div
      className="timeline"
      variants={timelineVariants}
      initial="hidden"
      animate="visible"
      ref={timelineRef}
    >
      {/* <div className="timeline-line"></div> */}

      {sortedExperiences.map((exp, index) => (
        <motion.div
          key={index}
          className="timeline-item"
          variants={itemVariants}
        >
          <div className="timeline-content">
            <div className="timeline-year">{exp.year}</div>
            <motion.div
              className="timeline-logo-container"
              variants={logoVariant(index)}
              initial="hidden"
              whileInView="visible"
            >
              <picture>
                <source srcSet={exp.logo} type="image/webp" />
                <motion.img
                  src={exp.logo}
                  alt={exp.company}
                  className={`timeline-logo ${
                    exp.logo === "/netsilogo.png" ? "netsi-logo" : ""
                  }`}
                  // style={{
                  //   backgroundColor:
                  //     exp.logo === "/netsilogo.png" ? "black" : undefined,
                  // }}
                  loading="lazy" decoding="async"
                />
              </picture>
            </motion.div>
            <motion.div
              className="timeline-branch"
              variants={jobVariant()}
              initial="hidden"
              whileInView="visible"
            ></motion.div>
            <motion.div
              className="timeline-box"
              variants={jobVariant()}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={(e) => openModal(exp, e)}
            >
              <h2>{exp.title}</h2>
              <p className="timeline-company-name">{exp.company}</p>
              <p className="timeline-synopsis">
                {exp.synopsis.substring(0, 100)}...
              </p>
              <button>Learn More</button>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
