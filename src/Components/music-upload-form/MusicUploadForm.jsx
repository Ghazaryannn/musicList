//A new component below the song list for users to upload music files.
import React, { useState } from 'react';
import { FaCaretDown } from "react-icons/fa";
import { Button} from 'antd';
import styles from './MusicUploadForm.module.css'


const MusicUploadForm = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [loadings, setLoadings] = useState([])

  const [fileName, setFileName] = useState('')

  const handleFileName = (e) => {
    setFileName(e.target.innerText);
  }

  // Function to toggle button disablement

  const toggleButton = (e) => {
    setIsButtonDisabled(!isButtonDisabled);
    handleFileName(e)
  };


  // Function to set loading state and simulate loading process

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    })

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        console.log(`Download ${fileName}`);
        return newLoadings;
      });
    }, 6000); // Simulating 6 seconds loading time
  }

  return (
    <div className={styles.upload}>
      <Button
      type="primary" 
      loading={loadings[0]} 
      onClick={() => enterLoading(0)} 
      className={styles.btn} 
      disabled={isButtonDisabled}>
        Download
      </Button>
       {/* Dropdown for selecting file format */}
      <div className={styles.dropdown}>
        <button className={styles.down}><FaCaretDown /></button>
        <div className={styles.down_content}>
           {/* Options for file format */}
          <p onClick={toggleButton}>.mp3</p>
          <p onClick={toggleButton}>.wav</p>
        </div>
      </div>
    </div>
  )

}

export default MusicUploadForm