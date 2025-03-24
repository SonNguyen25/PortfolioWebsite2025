import { motion } from "framer-motion";
import { useState } from "react";

const ProjectCard = ({ title, description, imgUrl, techStack, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="project-card"
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -10,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-card-img">
        <img src={imgUrl || "/placeholder.svg"} alt={title} />
        <motion.div
          className="project-card-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="view-details"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            View Details
          </motion.div>
        </motion.div>
      </div>
      <div className="project-card-content">
        <h3>{title}</h3>
        <div className="tech-stack">
          {techStack.split(", ").slice(0, 3).join(", ")}
          {techStack.split(", ").length > 3 ? "..." : ""}
        </div>
        <p className="description">
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;