import React from 'react'
import styles from '../../homeComponents/Homepage.module.css'

const AppControlsDelete = ({deleteAllMeals}) => {
  return (
    <div className='app__controls__delete'>
      <button className={styles.app__controls_delete} onClick={() => deleteAllMeals()}>Delete All</button>
    </div>
  )
}

export default AppControlsDelete