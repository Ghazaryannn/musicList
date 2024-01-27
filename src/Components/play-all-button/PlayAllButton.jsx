//A button to initiate playing all songs
import React from 'react'
import { FaPlay } from "react-icons/fa";
import { Dropdown } from 'antd';
import styles from './PlayAllButton.module.css'


//Items menu
const items = [
  {
    label: 'Play selected',
  }
];


const PlayAllButton = () => {
  // Function declaration for handling menu item click event
  const onMenuClick = () => {
    console.log('Play selected');
  };

  return (
    <div className={styles.allPlay}>
      <Dropdown.Button
        onClick={() => console.log('Play all')}
        menu={{
          items,
          onClick: onMenuClick,
        }}
      >
        <FaPlay className={styles.play} />
        Play All
      </Dropdown.Button>
    </div>
  )
}

export default PlayAllButton