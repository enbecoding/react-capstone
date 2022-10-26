import React from "react";
import MotivationalQuote from "./MotivationalQuote";
import Navbar from "./Navbar";
import styles from "./Homepage.module.css"
import HealthLog from "./HealthLog";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.mainContainer}>
        <div className={styles.quoteContainer}>
        <MotivationalQuote />
        </div>
        <div className={styles.healthLogContainer}>
        <HealthLog />
        </div>
      </div>
    </>
  );
};

export default Home;
