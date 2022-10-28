import React from 'react'
import styles from '../../homeComponents/Homepage.module.css'

const AppModal = ({setOpenModal}) => {
  return (
    <div className={styles.app__modal}>
      <h3>Calories Must Be Bigger than 0 And Meal Cannot Be Blank</h3>
      <button className={styles.btn__close_modal} onClick={() => setOpenModal(false)}>Close</button>
    </div>
  )
}

export default AppModal