import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "experiences"
            ? "linear-gradient(180deg, var(--dark-purple-1), var(--dark-purple-2))"
            : "linear-gradient(180deg, var(--dark-purple-2), var(--neon-pink))",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "experiences" ? "Work Experiences" : "Projects Portfolio"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        
        className="planets"
        style={{
            y: yBg,
            backgroundImage: `url(${
                type === "experiences" ? "/planets.png" : "/sun.png"
              })`,
          }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
