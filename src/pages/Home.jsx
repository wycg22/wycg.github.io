import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-page"
    >
      <div className="hero">
        <h1>Hi, I'm William</h1>
        <p className="subtitle">Computer Engineering Student</p>
        <p className="intro">I build modern web applications with focus on performance and user experience</p>
      </div>
    </motion.div>
  );
};

export default Home;