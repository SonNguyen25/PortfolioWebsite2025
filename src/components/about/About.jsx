import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AboutHeading, AboutSection } from "./AboutComponents";
import AchievementBar from "./achievement/AchievementBar";
import "./About.scss";

const About = () => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);

  const aboutBullets = [
    { label: "Who Am I?", logoSrc: "/about/education.svg" },
    { label: "Education", logoSrc: "/about/education.png" },
    { label: "Programming Skills", logoSrc: "/about/programming-skills.svg" },
    { label: "Certifications/Awards", logoSrc: "/about/certificate.png" },
    { label: "Interests", logoSrc: "/about/interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 80 },
    { skill: "React JS", ratingPercentage: 80 },
    // { skill: "React Native", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 80 },
    { skill: "Mongo Db", ratingPercentage: 65 },
    { skill: "Core Java", ratingPercentage: 70 },
    { skill: "Python", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title:
        "Winner - ETHBoston Hackathon - Meaningful Social Impact and 1st Place Innovate on Cardona",
      duration: { fromDate: "2024", toDate: "2024" },
      description:
        "Awarded the top prize for Meaningful Social Impact at ETHBoston 2024 for developing 'VolunMint,' a blockchain-powered platform promoting community-driven volunteering initiatives. Recognized for innovation on the Polygon Cardona zkEVM Testnet during ETHBoston 2024, focusing on scalability and Ethereum compatibility",
      subHeading:
        "Built a decentralized application leveraging Polygon blockchain, Solidity smart contracts, and Next.js to enable users to earn rewards while contributing to social good.",
    },
    {
      title: "Second Place - innovAIte Hackathon",
      duration: { fromDate: "2024", toDate: "2024" },
      description:
        "Secured second place at the inaugural innovAIte Hackathon, focused on creating AI-powered EdTech solutions. As the leader of the group and a full-stack engineer, collaborated with a multidisciplinary team to design and implement with ai4Career, a project leveraging cutting-edge AI technology to provide personalized career advice and academic planning support for students.",
      subHeading:
        "Designed and implemented a full-stack application using React.js, Node.js, and Firebase, featuring interactive career path exploration, personalized recommendations with LLM integration, and secure user authentication.",
    },
    {
      title: "VinGroup AI Engineer Training Completion Certificate",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "Completed Vingroup's AI Engineer Training Program focusing on AI, Data Science, and Machine/Deep Learning.",
      subHeading:
        "An intensive program by Vingroup to develop high-quality AI engineers. Covered foundational and advanced topics such as Machine Learning, Computer Vision, Natural Language Processing (NLP), Linear Algebra, and Statistics. Gained hands-on experience in real-world projects within a professional environment.",
    },

    //   title: "International Baccalaureate Diploma",
    //   duration: { fromDate: "2019", toDate: "2020" },
    //   description:
    //     "Higher Level: Mathematics, Geography, Computer Science | Standard Level: English Language & Literature A, Spanish Ab Initio, Physics.",
    //   subHeading: "Score: 37/45.",
    // },
    // {
    //   title: "IGCSE",
    //   duration: { fromDate: "2017", toDate: "2018" },
    //   description:
    //     "Completed the International General Certificate of Secondary Education (IGCSE).",
    //   subHeading: "Score: 6 A/A* grades.",
    // },
  ];

  const aboutDetails = [
    // About Me
    <AboutSection key="about-me">
      <div className="about-me-container">
        <div className="about-me-image-container">
          <img
            src="/AboutMe.jpg?"
            alt="Profile"
            width={"300"}
            height={"300"}
            className="about-me-image"
          />
        </div>
        <div className="about-me-content">
          <p className="about-me-text">
            Hi there! I am a passionate Computer Science student at Northeastern
            University, concentrating in Software, with a strong foundation in
            full-stack development and a little sauce for artificial
            intelligence - got to keep things spicy! With experience in both
            academic and professional settings in in React, Node.js, Java and
            Python, I have developed a commitment in crafting responsive,
            scalable, and secure web applications. My journey in technology has
            been marked by continuous learning, hands-on experience and just the
            right amount of coffee in various projects, from web development to
            AI implementations. Aside from programming, I’m all about sharing
            knowledge and helping others level up. Whether it’s teaching,
            brainstorming, or geeking out over the latest tech, I believe
            learning together is way more fun (and effective). Let’s build
            something amazing!
          </p>
        </div>
      </div>
    </AboutSection>,
    // Education
    <AboutSection key="education">
      <AboutHeading
        heading="Northeastern University, Boston, MA"
        subHeading="BACHELOR OF SCIENCE IN COMPUTER SCIENCE, GPA: 3.76"
        fromDate="2020"
        toDate="2025"
      />

      <AboutHeading
        heading="British International School Hanoi - Nord Anglia Education"
        subHeading="International Baccalaureate Diploma and IGCSE"
        fromDate="2012"
        toDate="2020"
      />
    </AboutSection>,

    // Programming Skills
    <AboutSection key="programming-skills">
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.ratingPercentage}%` }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="active-percentage-bar"
            />
          </div>
        </div>
      ))}
    </AboutSection>,

    // Projects
    <AboutSection key="certifications">
      {projectsDetails.map((project, index) => (
        <AboutHeading
          key={index}
          heading={project.title}
          subHeading={project.subHeading}
          description={project.description}
          fromDate={project.duration.fromDate}
          toDate={project.duration.toDate}
        />
      ))}
    </AboutSection>,

    // Interests
    <AboutSection key="interests">
      <AboutHeading
        heading="Teaching"
        description="I enjoy teaching and sharing knowledge because I believe in empowering others through education."
      />
      <AboutHeading
        heading="Music"
        description="Listening to soothing music helps me relax, and sometimes it also boosts my productivity!"
      />
      <AboutHeading
        heading="Basketball"
        description="I love challenging myself in competitive pick-up basketball games as well as meet new people that shares the same interests as me."
      />
      <AboutHeading
        heading="Gym"
        description="I enjoy maintaining my physical fitness through strength training and challenging myself to achieve new personal records."
      />
      <AboutHeading
        heading="Gaming"
        description="I enjoy testing my reflexes in competitive gaming sessions and exploring interactive storytelling experiences."
      />
      <AboutHeading
        heading="Hiking"
        description="Exploring nature through hiking allows me to unwind, stay active, and appreciate the beauty of the outdoors."
      />
    </AboutSection>,
  ];

  return (
    <div className="about">
      <h2 className="about-title">
        {" "}
        <motion.b
          whileHover={{
            background: "linear-gradient(to right, #c084fc, #db2777)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About
        </motion.b>{" "}
        Me.
      </h2>
      <h3 className="about-subtitle">My Formal Bio Details</h3>
      <div className="about-card">
        <div className="about-bullets">
          <div className="bullet-container">
            {aboutBullets.map((bullet, index) => (
              <motion.div
                key={index}
                onClick={() => setSelectedBulletIndex(index)}
                className={
                  index === selectedBulletIndex
                    ? "bullet selected-bullet"
                    : "bullet"
                }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  className="bullet-logo"
                  src={bullet.logoSrc}
                  alt={bullet.label}
                  width={20}
                  height={20}
                />
                <span>{bullet.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="about-bullet-details">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedBulletIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {aboutDetails[selectedBulletIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <AchievementBar />
    </div>
  );
};

export default About;
