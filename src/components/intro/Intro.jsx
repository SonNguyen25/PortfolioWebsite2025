import { motion } from "framer-motion";
import "./Intro.scss";
import BlurText from "../utils/BlurText";
// import Lanyard from "../utils/Lanyard";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollAnimation: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const Intro = () => {
  return (
    <div className="intro">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h3 variants={textVariants}>Hi, I&apos;m</motion.h3>
          <motion.h2 variants={textVariants}>SON NGUYEN</motion.h2>
          {/* <motion.h1 variants={textVariants}> */}
          <BlurText
            text="Full Stack and Web Developer"
            delay={150}
            animateBy="words"
            direction="top"
            // onAnimationComplete={handleAnimationComplete}
            className="blur-text"
          />
          {/* Full Stack and Web Developer */}
          {/* </motion.h1> */}
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See my Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Get in Touch</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollAnimation"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="sliding-text-container"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        <span>
          Front-end Back-end Full-stack React Node.js Java Python&nbsp;
        </span>
        <span>Front-end Back-end Full-stack React Node.js Java Python</span>
      </motion.div>
      <div className="image-container">
        <img src="/noback9kv2-2-3 (2).png" alt="" />
        {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}
      </div>
    </div>
  );
};

export default Intro;
