import React from "react";
import styles from "../../homeComponents/Homepage.module.css";

const AppMealsList = ({ meals, deleteMealHandler }) => {

  return (
    <div className={styles.meals_container_wrapper}>
      {meals.map((meal, index) => (
        <div key={index} className={styles.meals_container_wrapper_inner}>
          <div>{`${meal.mealName} : ${meal.calories}`}</div>
          <div>
            <button
              className={styles.delete_meal_btn}
              onClick={() => deleteMealHandler(meal.id)}
            >
              Delete Meal
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppMealsList;
