import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import TrackVisibility from "react-on-screen";
import "./Portfolio.scss";
import ProjectCard from "./ProjectCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const tabContentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [modalData, setModalData] = useState(null);
  const [modalOrigin, setModalOrigin] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-100px" });

  const projects = [
    {
      title: "Epistorm Mobility Dashboard @NetSI",
      description:
        "A web-based analytics platform designed to visualize U.S. mobility, commuting, and contact patterns across multiple geographic levels (national, states, counties, CSAs, CBSAs). This tool was developed as part of my co-op at Network Science Institute and plays a crucial role in epidemiological research and public health analysis. You can access the dashboard by clicking the button below, but some features might be hidden, and only are exclusive to researchers.",
      imgUrl: "/projects/epistorm.png",
      category: "web",
      techStack: "ReactJS, Node.js, Express, Google Big Query, Google Cloud Platform, Firebase, Zustand, Mapbox, HTML, CSS, JavaScript",
      date: "December 2024",
      link: "https://mobility-dashboard.xi-lab.io/home",
      // github: "https://github.com/SonNguyen25/ImageProcessingApplication",
    },
    {
      title: "EarthBeats - HackBeanpot 2025",
      description:
        "EarthBeats is your road trip companion that helps to minimizes carbon emissions and offers rewards! It suggests sustainable routes, connects travelers, and matches music to mood using voice analysis.",
      imgUrl: "/projects/earthbeats.jpg",
      category: "web",
      techStack:
        "Flask, ReactJS, Next.js, Node.js, Express, MongoDB, HTML, CSS, JavaScript, Python, TailwindCSS",
      date: "February 2025",
      link: "https://devpost.com/software/earthbeats",
      github: "https://github.com/SonNguyen25/hackbeanpot-2025",
    },
    {
      title: "Senzu - A Social Media Platform for Gymgoers",
      description:
        "A full-stack social media web app designed specifically for fitness enthusiasts. Users can create profiles, follow others, share workout posts, like and comment on content, and explore exercise routines powered by a third-party API with real-time search functionality. The platform features an intelligent chatbot assistant to help users navigate the app or discover workouts. Admins can manage user activity, including banning accounts or moderating posts, ensuring a safe and motivating community space for gymgoers.",
      imgUrl: "/projects/senzu.png",
      category: "web",
      techStack: "React, Node.js, Express, MongoDB, HTML, CSS, JavaScript",
      date: "March 2024",
      link: "https://senzusocial.netlify.app/",
      github: "https://github.com/SonNguyen25/senzu-frontend",
    },
    {
      title: "VolunMint - ETHBoston 2024",
      description:
        "A digital platform powered by blockchain technology that enables users to contribute to social good while earning rewards.",
      imgUrl: "/projects/volunmint.png",
      category: "web",
      techStack:
        "Next.js, Solidity, Ethereum, Firebase, web3.js, Polygon, solidity-dapps",
      date: "April 2024",
      link: "https://devpost.com/software/socialcred/",
      github: "https://github.com/SonNguyen25/VolunMint",
    },
    {
      title: "ai4Career - innovAIte 2024",
      description:
        "AI4Career is a student for student project, it leverages cutting-edge AI technology to provide personalized, insightful career advice and academic planning support to students at crucial pathways of their educational journey. Targeted at high school students applying to university, first-year university students, and those uncertain about their career paths, AI4Career aims to demystify the process of making informed decisions regarding education and career.",
      imgUrl: "/projects/ai4career.png",
      category: "web",
      techStack: "ReactJS, Node.js, Express, Firebase, HTML, CSS, Javascript",
      date: "March 2024",
      link: "https://github.com/SonNguyen25/ai4career",
      // github: "https://github.com/SonNguyen25/ai4career",
    },
    {
      title: "Image Processing App",
      description:
        "This program allows the user to process different image types with some basic commands. The currently supported image type is ppm, jpg, jpeg, png, bmp. And the program allows the user to change the brightness, flipping vertically or horizontally, downscaling, blur (Gaussian blur), sharpen, speia and greyscale (changing to greyscale different component ways). Partial Image Manipulation is also supported.",
      imgUrl: "/projects/img.png",
      category: "software",
      techStack: "Java, Java Swing, Command-Line Interface",
      date: "December 2021",
      // link: "https://github.com/SonNguyen25/ImageProcessingApplication",
      github: "https://github.com/SonNguyen25/ImageProcessingApplication",
    },
    {
      title: "Equipment Management System",
      description:
        "A solo project in Java to solve management issues in British International School’s Art Department by keeping track and managing equipment loaning process.",
      imgUrl: "/projects/equipmentmanagement.png",
      category: "software",
      techStack: "Java, Java Swing, SQL, Microsoft SQL Server, SQL Server Management Studio (SSMS)",
      date: "May 2019",
      link: "https://github.com/SonNguyen25/EquipmentManagementSystem",
      // github: "https://github.com/SonNguyen25/ImageProcessingApplication",
    },
    {
      title: "Kanbas - A Canvas Lookalike",
      description:
        "A website based on a popular online Learning Management System (LMS). It is used by learning institutions, educators, and students to access and manage online course materials and communicate about course-related topics.",
      imgUrl: "/projects/kanbas.png",
      category: "web",
      techStack: "ReactJS, Node.js, Express, MongoDB, Redux, HTML, CSS, JavaScript",
      date: "February 2024",
      link: "https://a6--beautiful-pika-bb3cab.netlify.app/#/Kanbas/Dashboard",
      github: "https://github.com/SonNguyen25/kanbas-react-web-app/tree/a6",
    },
    {
      title: "Marble Solitaire Game",
      description:
        "A website based on a popular online Learning Management System (LMS). It is used by learning institutions, educators, and students to access and manage online course materials and communicate about course-related topics.",
      imgUrl: "/projects/marblesolitaire.png",
      category: "software",
      techStack: "Java, Command-Line Interface",
      date: "November 2021",
      // link: "https://a6--beautiful-pika-bb3cab.netlify.app/#/Kanbas/Dashboard",
      github: "https://github.com/SonNguyen25/marble-solitaire",
    },
  ];

  // parse the date format
  const parseDate = (dateString) => {
    const monthNames = {
      January: 0,
      February: 1,
      March: 2,
      April: 3,
      May: 4,
      June: 5,
      July: 6,
      August: 7,
      September: 8,
      October: 9,
      November: 10,
      December: 11,
    };

    const [month, year] = dateString.split(" ");
    return new Date(parseInt(year), monthNames[month] || 0); 
  };

  const filteredProjects = projects
    .filter((proj) => activeTab === "all" || proj.category === activeTab)
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));

  const openModal = (project, e) => {
    const cardElement = e.currentTarget;
    if (cardElement) {
      const rect = cardElement.getBoundingClientRect();
      setModalOrigin({
        x: rect.left - window.innerWidth / 2 + rect.width / 2,
        y: rect.top - window.innerHeight / 2 + rect.height / 2,
      });
    }
    setModalData(project);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalData(null);
    // Re-enable scrolling
    document.body.style.overflow = "auto";
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container" ref={containerRef}>
        <TrackVisibility>
          {({ isVisible: tvIsVisible }) => (
            <motion.div
              className={`portfolio-content ${
                tvIsVisible ? "animate__animated animate__fadeIn" : ""
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Enhanced Title Header */}
              <div className="portfolio-title-container">
                <motion.div
                  className="portfolio-title-left"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: isInView ? 0 : -50, opacity: isInView ? 1 : 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="image-wrapper">
                    <img src="/exhibition.jpg" alt="Exhibitions" />
                    <div className="image-overlay"></div>
                  </div>
                  <h1>
                    <motion.b
                      whileHover={{
                        background:
                          "linear-gradient(to right, #c084fc, #db2777)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Creative
                    </motion.b>{" "}
                    Exhibition
                  </h1>
                </motion.div>
                <motion.div
                  className="portfolio-title-right"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h1>
                    <motion.b
                      whileHover={{
                        background:
                          "linear-gradient(to right, #c084fc, #db2777)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      My Project
                    </motion.b>{" "}
                    Portfolio.
                  </h1>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    WHAT I BUILT
                  </motion.button>
                </motion.div>
              </div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Explore my projects showcasing my expertise in building
                responsive web applications and mobile solutions. Each project
                represents a unique challenge solved with modern technologies
                and creative design.
              </motion.p>

              <motion.div
                className="portfolio-tabs"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="portfolio-nav">
                  {["all", "web", "software"].map((tab) => (
                    <motion.button
                      key={tab}
                      className={activeTab === tab ? "active" : ""}
                      onClick={() => setActiveTab(tab)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      {activeTab === tab && (
                        <motion.div
                          className="active-indicator"
                          layoutId="activeIndicator"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    className="portfolio-tab-content"
                    variants={tabContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="portfolio-projects"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {filteredProjects.map((project, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="project-card-wrapper"
                        >
                          <ProjectCard
                            {...project}
                            onClick={(e) => openModal(project, e)}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </TrackVisibility>
      </div>
      <motion.div
        className="background-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.5 }}
      >
        <motion.img
          className="background-image-right"
          alt="Background"
          style={{ y: isInView ? -20 : 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>

      <AnimatePresence>
        {modalData && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal"
              onClick={(e) => e.stopPropagation()}
              initial={{
                scale: 0,
                x: modalOrigin.x,
                y: modalOrigin.y,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                x: 0,
                y: 0,
                opacity: 1,
              }}
              exit={{
                scale: 0,
                x: modalOrigin.x,
                y: modalOrigin.y,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                mass: 1,
              }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h2>{modalData.title}</h2>
                  <motion.button
                    className="close-button"
                    onClick={closeModal}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ×
                  </motion.button>
                </div>

                <div className="modal-image">
                  <img
                    src={modalData.imgUrl || "/placeholder.svg"}
                    alt={modalData.title}
                  />
                </div>

                <div className="project-details">
                  <div className="detail-item">
                    <span className="detail-label">Tech Stack:</span>
                    <div className="tech-tags">
                      {modalData.techStack.split(", ").map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Date:</span>
                    <span className="detail-value">{modalData.date}</span>
                  </div>
                </div>

                <p className="description">{modalData.description}</p>

                <div className="modal-actions">
                  {modalData.link && (
                    <motion.a
                      href={modalData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-project-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project
                    </motion.a>
                  )}
                  {modalData.github && (
                    <motion.a
                      href={modalData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub Repo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
