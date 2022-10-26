import React from "react";
import MotivationalQuote from "./MotivationalQuote";
import Navbar from "./Navbar";
import styles from "./Homepage.module.css"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.mainContainer}>
        <div className={styles.quoteContainer}>
        <MotivationalQuote />
        </div>
      </div>
    </>
  );
};

export default Home;
