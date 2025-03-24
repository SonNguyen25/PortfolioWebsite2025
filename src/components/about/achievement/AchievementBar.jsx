import { motion } from "framer-motion";
import CountUp from "./CountUp";

const AchievementItem = ({ metric, value, postfix }) => {
  return (
    <motion.div
      className="achievement-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="achievement-value">
        <CountUp to={value} from={0} duration={2} startWhen={true} separator="," />
        {postfix && <span>{postfix}</span>}
      </h2>
      <p className="achievement-metric">{metric}</p>
    </motion.div>
  );
};

const AchievementBar = () => {
  const achievementsList = [
    { metric: "Projects", value: 15, postfix: "+" },
    { metric: "Years", value: 4, postfix: "+" },
    { metric: "Internships/Co-ops", value: 3 },
    { metric: "Recognitions", value: 5 },
  ];

  return (
    <motion.div
      className="achievements-section"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.3 },
        },
      }}
    >
      <motion.div
        className="achievements-container"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {achievementsList.map((achievement, index) => (
          <AchievementItem key={index} {...achievement} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AchievementBar;