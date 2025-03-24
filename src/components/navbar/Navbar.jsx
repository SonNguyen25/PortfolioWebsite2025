import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper" >
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Son Nguyen
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/sonnguyen25">
            <FaLinkedin />
          </a>
          <a href="https://github.com/SonNguyen25/">
           <FaGithub />
          </a>
          
          {/* <a href="#home"><img src "/linkedin.png" alt=""></a> */}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
