/* eslint-disable react/no-unknown-property */
"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Stars, useTexture } from "@react-three/drei"
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa"
import { HiMail } from "react-icons/hi"
import "./Footer.scss"
import * as THREE from 'three' // Add explicit Three.js import

const FooterBackground = () => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <Canvas className="footer-canvas">
      <ambientLight intensity={0.1} />
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      <GradientPlane />
    </Canvas>
  )
}

const GradientPlane = () => {
  // Use useLoader instead if useTexture continues to cause issues
  const texture = useTexture("/gradient-texture.webp")

  return (
    <mesh 
      rotation={[-Math.PI / 2, 0, 0]} 
      position={[0, -5, 0]}
    >
      <planeGeometry args={[50, 50, 1, 1]} />
      <meshBasicMaterial 
        map={texture} 
        transparent={true} 
        opacity={0.2} 
        color="#c084fc" 
      />
    </mesh>
  )
}

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/SonNguyen25", label: "GitHub" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/sonnguyen25/", label: "LinkedIn" },
    // { icon: <FaTwitter />, url: "https://twitter.com/yourusername", label: "Twitter" },
    // { icon: <FaInstagram />, url: "https://instagram.com/yourusername", label: "Instagram" },
  ]

  const footerLinks = [
    { name: "Home", url: "/#Homepage" },
    { name: "About", url: "/#About" },
    { name: "Experience", url: "/#Experiences" },
    { name: "Portfolio", url: "/#Portfolio" },
    { name: "Contact", url: "/#Contact" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <footer className="footer">
      <div className="footer-background">
        <FooterBackground />
      </div>

      <div className="footer-content">
        <motion.div
          className="footer-top"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="footer-logo" variants={itemVariants}>
            <h2>SON NGUYEN</h2>
            <p className="tagline">Full Stack and Web Developer</p>
          </motion.div>

          <motion.div className="footer-contact" variants={itemVariants}>
            <h3>Get In Touch</h3>
            <a href="mailto:nguyen.so@northeastern.edu" className="email-link">
              <HiMail className="email-icon" />
              <span>Contact Me!</span>
            </a>
            <p className="location">Based in Boston, MA</p>
          </motion.div>

          <motion.div className="footer-nav" variants={itemVariants}>
            <h3>Quick Links</h3>
            <ul>
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="footer-social" variants={itemVariants}>
            <h3>Connect</h3>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="copyright">
            <p>&copy; {currentYear} Son Nguyen. All rights reserved.</p>
          </div>
          <div className="footer-links">
          <a href="#Contact">Let&apos;s make something together!</a>
            <span className="divider">|</span>
            
            <a href="#Homepage">Back to Top</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer