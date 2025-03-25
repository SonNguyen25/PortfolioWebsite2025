import { motion } from "framer-motion";
import "./GlassIcons.scss";

// const gradientMapping = {
//   javascript: "linear-gradient(135deg, #f7df1e, #e6cc1e)",
//   react: "linear-gradient(135deg, #61dafb, #4fa8c9)",
//   express: "linear-gradient(135deg, #ffffff, #cccccc)",
//   node: "linear-gradient(135deg, #339933, #267326)",
//   mongodb: "linear-gradient(135deg, #47a248, #3a8a3a)",
//   java: "linear-gradient(135deg, #007396, #005a80)",
//   python: "linear-gradient(135deg, #3776ab, #2a5d8a)",
//   html: "linear-gradient(135deg, #e34f26, #c43c1c)",
//   css: "linear-gradient(135deg, #1572b6, #0e5a92)",
//   default: "linear-gradient(135deg, #c084fc, #db2777)",
// };

const GlassIcons = ({ items, className }) => {
  const getBackgroundStyle = (color) => {
    // if (gradientMapping[color]) {
    //   return { background: gradientMapping["default"] };
    // }
    return { background: "linear-gradient(135deg, #c084fc, #db2777)" };
  };

  return (
    <div className={`icon-btns ${className || ""}`}>
      {items.map((item, index) => (
        <motion.button
          key={index}
          className={`icon-btn ${item.customClass || ""}`}
          aria-label={item.label}
          type="button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <span
            className="icon-btn-back"
            style={getBackgroundStyle(item.color)}
          ></span>
          <span className="icon-btn-front">
            <span className="icon-btn-icon" aria-hidden="true">{item.icon}</span>
          </span>
          <span className="icon-btn-abel">{item.label}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default GlassIcons;
