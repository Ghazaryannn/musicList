import React from 'react'
import MusicPlayerAnimation from '../music-player-animation/MusicPlayerAnimation'
import { useContext } from 'react'
import { AudiaoContext } from '../../context/AudioContext'
import styles from './SongsTitle.module.css'

const SongsTitle = () => {
  const { isPlaying } = useContext(AudiaoContext)
  return (
    <div className={styles.title}>
        <div className={styles.animation}>{isPlaying ? <MusicPlayerAnimation/> : ''}</div>
        <div className={styles.info}>Song Name</div>
        <div className={styles.info}>Artist Name</div>
        <div className={styles.id}>Track</div>
        <div className={styles.time}>Duration</div>
        <div className={styles.download}>Download</div>
        <div className={styles.action}></div>
    </div>
  )
}

export default SongsTitle