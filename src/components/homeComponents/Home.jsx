import React, { useEffect, useState } from "react";
import MotivationalQuote from "./MotivationalQuote";
import Navbar from "./Navbar";
import styles from "./Homepage.module.css";
import AppControlsCounter from "../calorieComponents/AppControls/AppControlsCounter";
import AppControlsDelete from "../calorieComponents/AppControls/AppControlsDelete";
import AppControlsInputs from "../calorieComponents/AppControls/AppControlsInputs";
import AppMealsList from "../calorieComponents/AppMealsList/AppMealsList";
import AppModal from "../calorieComponents/AppModal/AppModal";
import AppMealsFilter from "../calorieComponents/AppMealsFilter/AppMealsFilter";
import axios from 'axios'
import { useAuth } from "../../store/AuthContext";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const { currentUser } = useAuth()

  const addMealsHandler = () => {
    const oldMeals = [...meals];
    const meal = {
      mealName,
      calories,
      id: Math.floor(Math.random() * 1000),
    };

    const newMeals = oldMeals.concat(meal);

    if (calories.calories_amt <= 0 || meals.name === "") {
      setOpenModal(true);
    } else {
      setMeals(newMeals);
      // localStorage.setItem("meals", JSON.stringify(newMeals));
    }

    setMealName("");
    setCalories(0);
  };

  const deleteMealHandler = (id) => {
    // const oldMeals = [...meals];
    // const newMeals = oldMeals.filter((meal) => meal.id !== id);

    // setMeals(newMeals);
    // localStorage.setItem("meals", JSON.stringify(newMeals));
    axios.delete(`http://localhost:3009/api/items/${id}`).then((res) => {
      getFoodItems()
    })
  };

  const deleteAllMeals = () => {
    // setMeals([]);
    // localStorage.clear();
    axios.delete(`http://localhost:3009/api/deleteitems/${currentUser.uid}`).then((res) => {
      setMeals([])
    })
  };

  const total = meals
    .map((meal) => meal.calories_amt)
    .reduce((acc, value) => acc + +value, 0);

  useEffect(() => {
    getFoodItems()
    const oldState = [...meals];
    if (selectedFilter === "Ascending") {
      const ascendingMeals = oldState.sort((a, b) => a.calories - b.calories);
      setMeals(ascendingMeals);
    } else if (selectedFilter === "Descending") {
      const descendingMeals = oldState.sort((a, b) => b.calories - a.calories);
      setMeals(descendingMeals);
    }
  }, [selectedFilter]);

  const getFoodItems = () => {
    axios.get(`http://localhost:3009/api/items/${currentUser.uid}`).then((res)=> {
      setMeals(res.data)
    })
  }

  return (
    <>
      <Navbar />
      {openModal ? <AppModal setOpenModal={setOpenModal} /> : ""}
      <div className={styles.mainContainer}>
        <div className={styles.quoteContainer}>
          <MotivationalQuote />
        </div>
        <div className={styles.appControlsContainer}>
          <AppControlsCounter total={total} />
          <AppControlsDelete deleteAllMeals={deleteAllMeals} />
        </div>
        <div className={styles.foodItemContainer}>
          <AppControlsInputs
            addMealsHandler={addMealsHandler}
            mealName={mealName}
            calories={calories}
            setMealName={setMealName}
            setCalories={setCalories}
            getFoodItems={getFoodItems}
          />
        </div>
        <div className={styles.listContainer}>
          <AppMealsFilter
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
          <AppMealsList meals={meals} deleteMealHandler={deleteMealHandler} />
        </div>
      </div>
    </>
  );
};

export default Home;
