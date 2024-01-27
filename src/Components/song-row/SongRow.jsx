import React, { useState } from 'react'
import { FaPlay, FaPause, FaCaretSquareRight } from "react-icons/fa";
import styles from './SongRow.module.css'
import second from '../../utils/seconds';
import { useContext } from 'react';
import { AudiaoContext } from '../../context/AudioContext';
import cn from 'classnames'
import MusicUploadForm from '../music-upload-form/MusicUploadForm';
import Actions from '../actions/Actions';

const SongRow = (track) => {
  const { id, preview, title, artists, duration } = track
  const { handleAudio, currentTrack, isPlaying } = useContext(AudiaoContext)      // Context for managing audio playback
  const icCurrentTrack = currentTrack.id === track.id      //Checking if the current track matches this track
  const secoundMMSS = second(duration)     //Formatting duration into MM:SS format
  const [open, setOpen] = useState(false)
  return (
    <div className={cn(styles.track, icCurrentTrack && styles.playing)}>

      <div className={styles.play}>
        {
          icCurrentTrack && isPlaying ? <FaPause onClick={() => handleAudio(track)}/> : <FaPlay onClick={() => handleAudio(track)} />
        }
        <img className={styles.preview} src={preview} alt="img" />
      </div>

      <div className={styles.title}>
        <b>{title}</b>
      </div>

      <div className={styles.artists}>
        <p>{artists}</p>
      </div>

      <div className={styles.id}>
        <b>{id}</b>
      </div>

      <div className={styles.time}>
        <p>{secoundMMSS}</p>
        <FaCaretSquareRight onClick={() => setOpen(!open)} className={styles.mobile_menu}/>
      </div>
      {
        open ? 
        <div className={cn(styles.mobile_select, open && styles.active)}>
        <MusicUploadForm />
        <Actions/>
        </div>
        : ''
      }

      <div className={styles.download}>
        <MusicUploadForm />
      </div>

      <div className={styles.action}>
        <Actions/>
      </div>

    </div>
  )
}

export default SongRow