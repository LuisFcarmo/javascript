import React from 'react'
import styles from '../components/Error.module.css'

const Error = ({ErrorMessage}) => {
  return (
    <div className = {styles.errorcontainer}>
        <p>{ErrorMessage}</p>
    </div>
  )
}

export default Error