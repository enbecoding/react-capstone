import React from 'react'
import styles from '../../homeComponents/Homepage.module.css'

const AppMealsFilter = ({selectedFilter, setSelectedFilter}) => {
  return (
    <div className={styles.app__meals__container__select}>
      <select defaultValue={selectedFilter}
      onChange={(e) => setSelectedFilter(e.target.value)}>
        <option value=""></option>
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
    </div>
  )
}

export default AppMealsFilter