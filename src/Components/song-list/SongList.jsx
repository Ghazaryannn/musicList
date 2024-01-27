//A component to display the list of songs

import React, {useState} from 'react'
import Header from '../header/Header'
import styles from './SongList.module.css'
import SongsTitle from '../songs-title/SongsTitle'
import SongRow from '../song-row/SongRow'
import { track } from '../../assets/db'


const SongList = () => {

  const [searchTrack, setSearchTrack] = useState('')

  // Filtering tracks based on the search query
  const filteredTrack = track.filter(track => {
    return track.title.toLocaleLowerCase().includes(searchTrack.toLowerCase())
  })
  return (
    <div className={styles.main}>
      <Header setSearchTrack={setSearchTrack}/>
      <SongsTitle/>
      <div className={styles.list}>
        {
          filteredTrack.map((track) => (
            <SongRow {...track}  key={track.id}/> //Passing track data as props to SongRow component 
          ))
        }
      </div>
    </div>
  )
}

export default SongList