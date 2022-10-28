import React, { useState } from "react";
import styles from "./Homepage.module.css";
import { Button } from "react-bootstrap";
import axios from "axios";

const HealthLog = () => {
  const [foodItem, setFoodItem] = useState("");
  const [foodCalorie, setFoodCarloie] = useState(0);
  const [workoutItem, setWorkoutItem] = useState("");
  const [workoutCalorie, setWorkoutCalorie] = useState(0);

  const addFoodItem = () => {
    console.log(foodItem)
    axios.post("http://localhost:3003/foodlogs", { 
      name: foodItem,
      foodcal: foodCalorie  
    })
    // axios({
    //   method:"post",
    //   url:"http://localhost:3003/foodlogs",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*"
    //   },
    //   body:{ 
    //     name: foodItem,
    //     foodcal: foodCalorie  
    //   }
    // })
    .then(() => {
      console.log("success")
    })
  };

  return (
    <>
      <div className={styles.healthLogContainer}>
        <div className={styles.foodItemsContainer}>
          <h3>Daily Foods Eaten</h3>
          <input
            type="text"
            placeholder="Enter a food item"
            className={styles.input_text}
            onChange={(e) => {
              setFoodItem(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Calories Amt"
            className={styles.input_number}
            onChange={(e) => {
              setFoodCarloie(e.target.value);
            }}
          />
          <Button onClick={addFoodItem}>+</Button>
        </div>
        <div className={styles.workoutContainer}>
          <h3>Workouts Completed</h3>
          <input
            type="text"
            placeholder="Enter a Workout Category"
            className={styles.input_text}
            onChange={(e) => {
              setWorkoutItem(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Calories Burnt"
            className={styles.input_number}
            onChange={(e) => {
              setWorkoutCalorie(e.target.value);
            }}
          />
          <Button>+</Button>
        </div>
      </div>
    </>
  );
};

export default HealthLog;
