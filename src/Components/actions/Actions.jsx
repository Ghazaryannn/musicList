import React from 'react'
import { FaHeart, FaCheck, FaShare, FaCaretDown } from "react-icons/fa";
import styles from './Actions.module.css'

const Actions = () => {
  return (
    <div className={styles.action}>
        <ul>
          <li><FaHeart /></li>
          <li><FaCheck /></li>
          <li><FaShare /></li>
          <li><FaCaretDown  className={styles.down}/></li>
        </ul>
    </div>
  )
}

export default Actions