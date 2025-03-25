import { motion } from "framer-motion";
import React, { lazy, useState, useEffect } from "react";
import "./Intro.scss";
// import Lanyard from "../utils/Lanyard";





const BlurText = lazy(() => import('../utils/BlurText'));

const Intro = React.memo(() => {
  const [imageSrc, setImageSrc] = useState('/scroll.png');

  useEffect(() => {
    const img = new Image();
    img.src = "/noback9kv2-2-3 (2).png";
    img.onload = () => {
      setImageSrc("/noback9kv2-2-3 (2).png");
    };
  }, []);

  const textVariants = React.useMemo(() => ({
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
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
  }), []);

  const sliderVariants = React.useMemo(() => ({ 
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "miror",
        ease: "linear",
      },
    },
  }), []);

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
        <span>Front-end Back-end React Node.js Java Python&nbsp;</span>
        <span>Front-end Back-end React Node.js Java Python</span>
      </motion.div>
      <div className="image-container">
        {/* <img src="/noback9kv2-2-3 (2).png" alt="" /> */}
        <picture>
          <source srcSet={"/noback9kv2-2-3 (2).png"} type="image/webp" />
          <img
            src={imageSrc}
            alt="Son Nguyen"
            loading="eager"
            // loading="lazy"
            // decoding="async"
          />
        </picture>
        {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}
      </div>
    </div>
   ); 
});

Intro.displayName = "Intro";

export default Intro;
