import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./Experiences.scss";
import { Timeline } from "./Timeline";
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Experiences = () => {
  const [modalData, setModalData] = useState(null);
  const [modalOrigin, setModalOrigin] = useState({ x: 0, y: 0 });

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && modalData) {
        closeModal();
      }
    };

    if (modalData) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalData]);
  
  const experiences = [
    {
      title: "Teaching Assistant - CS1800: Discrete Structures",
      company: "Northeastern University",
      logo: "/neulogo.png",
      period: "Sep 2021 - Dec 2021",
      location: "Boston, MA",
      duration: "4 months",
      synopsis:
        "Held weekly office hours, mentoring an average of 10 students per week on complex topics such as graph theories, Boolean algebra, and logical proofs, improving student comprehension and academic performance. Received training and collaborated with professors and a team of mentors and teaching assistants to grade and evaluate assignments for over 400 students, ensuring consistency and timely feedback.",
      skills: [
        "Problem Solving",
        "Graph Theories",
        "Boolean Algebra",
        "Logical Proofs",
        "Collaboration",
        "Teaching",
        "Communication",
        "Mentorship",
        "Time Management",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "FPT Software",
      logo: "/fptsoftwarelogo.png",
      period: "Sep 2022 - Dec 2022",
      location: "Hanoi, Vietnam",
      duration: "4 months",
      synopsis:
        "Improved and maintained the back-end functionality of a Java-based equipment management platform, utilizing Hibernate, Spring, and MySQL to develop efficient RESTful APIs for streamlined data management and retrieval. Collaborated with a team of interns to test, debug, and document updates, reducing bug reports by 30%. Presented a comprehensive report on applying design patterns to optimize code structure, resulting in a 15% improvement in code quality and maintainability.",
      skills: [
        "Java",
        "Spring",
        "Hibernate",
        "Spring Boot",
        "SQL",
        "MySQL",
        "Design Patterns",
        "Team Collaboration",
        "Documentation",
        "Debugging",
        "Unit Testing",
        "RESTful APIs",
      ],
    },
    {
      title: "AI Engineer Intern | Trainee",
      company: "VinBigData Joint Stock Company",
      logo: "/vinbigdatalogo.png",
      period: "Jun 2023 - Dec 2023",
      location: "Hanoi, Vietnam",
      duration: "6 months",
      synopsis:
        "Selected as one of the top <1% from a competitive pool of over 500 candidates to participate in Vingroup's prestigious AI Engineer Training Program. Acquired hands-on experience in cutting-edge AI technologies, mastering advanced fine-tuning techniques such as LoRA and Prompt Tuning on BLOOM with mixed precision training and multi-GPU setups, achieving significant improvements in code generation efficiency. Trained extensively in backend development using Django, containerization with Docker, and Agile project management practices with Jira and Scrum methodologies.",
      skills: [
        "Python",
        "Django",
        "Pytorch",
        "Numpy",
        "Agile Methodologies",
        "SCRUM",
        "Git",
        "Bitbucket",
        "Jira",
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Data Visualization",
      ],
    },
    {
      title: "Web Developer Co-op",
      company: "NetSI - Network Science Institute",
      logo: "/netsilogo.png",
      period: "Sep 2024 - Dec 2024",
      location: "Portland, Maine",
      duration: "4 months",
      synopsis:
        "Designed and implemented interactive dashboards for visualizing U.S. mobility, commuting, and contact patterns at multiple geographic levels (national, state, county, combined statistical area, core-based statistical area, metropolitan and micropolitan statistical areas, and census tracts). Developed and optimized Map Data API for efficient retrieval and rendering of geospatial data, and implemented Data Auth API using Firebase Authentication to secure user access and approvals. Created an admin functionality dashboard for managing and updating pipeline configurations, including table structures, metrics, and column mappings, to ensure seamless integration of new data sources and metrics. Built robust data pipelines leveraging Google BigQuery for real-time data access and visualization. Created user-friendly interfaces with dynamic maps, line charts, and color-coded legends to provide actionable insights for stakeholders in epidemiology and public health research.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "SQL",
        "NoSQL",
        "React",
        "Node.js",
        "Firebase",
        "D3.js",
        "Mapbox",
        "ReCharts",
        "Material-UI",
        "Chakra UI",
        "RESTful APIs",
        "Responsive Design",
        "Google BigQuery",
        "Google Cloud Platform",
        "Google Cloud Storage",
        "Agile Methodologies",
        "Git",
      ],
    },
    {
      title: "Teaching Assistant - CS4400: Programming Languages",
      company: "Northeastern University",
      logo: "/neulogo.png",
      period: "Jan 2025 - April 2025",
      location: "Boston, MA",
      duration: "4 months",
      synopsis:
        "Assisted students with complex topics such as recursion, lambda calculus, Church numerals, environment modeling, and meta-circular evaluators. Facilitated help and discussion forums to enhance understanding of compiler design, interpreters, and functional programming concepts. Held weekly office hours, graded and provided detailed feedback on homework assignments.",
      skills: [
        "Problem Solving",
        "Graph Theories",
        "Racket/Scheme",
        "Collaboration",
        "Teaching",
        "Communication",
        "Functional Programming",
        "Compiler Design",
        "Interpreters",
        "Time Management",
      ],
    },
  ];

  const openModal = (experience, e) => {
    const boxElement = e.target.closest(".box");
    if (boxElement) {
      const rect = boxElement.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      setModalOrigin({
        x: rect.left - windowWidth / 2 + rect.width / 2,
        y: rect.top - windowHeight / 2 + rect.height / 2,
      });
    }
    setModalData(experience);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="experiences-container">
    <motion.div
      className="experiences"
      variants={variants}
      initial="initial"
      // whileInView="animate"
      ref={ref}
      animate={window.innerWidth<= 738 ? "animate" : isInView && "animate"}
    >
      <motion.div className="text-container" variants={variants}>
        <p>
          I focus on building <br /> web/mobile/java applications!
        </p>
        <hr />
      </motion.div>
      <motion.div className="title-container" variants={variants}>
        <div className="title">
          {/* <img src="/people.webp" alt="" /> */}
          <picture>
          <source
            srcSet={"/people.webp"}
            type="image/webp"
          />
          <img src={"/people.webp"} alt={""} loading="lazy" decoding="async" />
        </picture>
          <h1>
            <motion.b
              whileHover={{
                background: "linear-gradient(to right, #c084fc, #db2777)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Professional
            </motion.b>{" "}
            Journey
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b
              whileHover={{
                background: "linear-gradient(to right, #c084fc, #db2777)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              My Career
            </motion.b>{" "}
            Path.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      
      {/* <motion.div className="listContainer" variants={variants}>
        {experiences.map((exp, index) => (
          <motion.div
            className="box"
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2>{exp.title}</h2>
            <p>{exp.synopsis.substring(0, 100)}...</p>
            <button onClick={(e) => openModal(exp, e)}>Learn More...</button>
          </motion.div>
        ))}
      </motion.div> */}
      <motion.div className="timeline-container" variants={variants}>
        <Timeline experiences={experiences} openModal={openModal} />
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
                <h2>{modalData.title}</h2>
                <div className="experience-details">
                  <p className="company-name">{modalData.company}</p>
                  <div className="meta-info">
                    <span className="period">{modalData.period}</span>
                    <span className="location">{modalData.location}</span>
                    <span className="duration">{modalData.duration}</span>
                  </div>
                </div>
                <p className="synopsis">{modalData.synopsis}</p>
                <div className="tags">
                  {modalData.skills.map((skill, index) => (
                    <span className="tag" key={index}>
                      {skill}
                    </span>
                  ))}
                </div>
                <button onClick={closeModal}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
    </div>
  );
};

export default Experiences;
