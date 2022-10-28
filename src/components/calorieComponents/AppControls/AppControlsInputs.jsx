import axios from 'axios'
import React from 'react'
import styles from '../../homeComponents/Homepage.module.css'
import {useAuth} from '../../../store/AuthContext'

const AppControlsInputs = ({addMealsHandler,mealName, calories, setCalories, setMealName, getFoodItems}) => {
  const {currentUser} = useAuth()
  const onAddMealsClick = () => {
    // addMealsHandler()
    axios.post('http://localhost:3009/api/items', {
      name: mealName,
      calories_amt:calories,
      userid: currentUser.uid
    }).then((res) => {
      console.log(res.data)
      getFoodItems()
    })
  }
  return (
    <div className='app__controls'>
      <div className={styles.app_controls_inputs}>
        <input 
          type="text"
          placeholder='Enter a Meal'
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
        />
        <input 
          type="number"
          placeholder='Calories'
          value={calories} 
          onChange={(e) => setCalories(e.target.value)}
          min={0}
        />
        <button className={styles.add_meal_btn} onClick={onAddMealsClick}>Add Meal</button>
      </div>
    </div>
  )
}

export default AppControlsInputs