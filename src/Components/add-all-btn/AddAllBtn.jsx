// A button to add all songs to a queue
import React from 'react'
import { FaPlus } from "react-icons/fa";
import { Dropdown } from 'antd';
import { items } from '../../assets/db';
import styles from './AddAllBtn.module.css'


const AddAllBtn = () => {

  // Function declaration for handling menu item click event
  const onMenuClick = () => {
    console.log('Add selected');
  };

  return (
    <div className={styles.addall}>
      <Dropdown.Button
        onClick={() => console.log('Add all')}
        menu={{
          items,
          onClick: onMenuClick
        }}
      >
        <FaPlus /> {/* Adding FaPlus icon */}
        Add All
      </Dropdown.Button>
    </div>
  )
}

export default AddAllBtn