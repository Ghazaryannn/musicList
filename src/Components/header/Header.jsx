import React from 'react'
import PlayAllButton from '../play-all-button/PlayAllButton'
import AddAllBtn from '../add-all-btn/AddAllBtn'
import SearchSongs from '../search-songs/SearchSongs'
import styles from './Header.module.css'

const Header = ({setSearchTrack}) => {
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <PlayAllButton /> {/* Component for playing all songs */}
        <AddAllBtn /> {/* Component for adding all songs */}
      </div>
      <div className={styles.header_right}>
        <SearchSongs  setSearchTrack={setSearchTrack}/> {/* Component for searching songs */}
      </div>

    </div>
  )
}

export default Header