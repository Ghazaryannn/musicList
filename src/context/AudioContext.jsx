import { createContext, useState } from "react";
import { track } from "../assets/db";

// Initialize a new Audio instance for audio playback

const audio = new Audio()

export const AudiaoContext = createContext({})

const AudioProvider = ({children}) => {
    const [currentTrack, setCurrenTrack] = useState(track[0])
    const [isPlaying, setIsPlaying] = useState(false)

    //Function to handle audio playback and track switching.
    const handleAudio = (track) => {
        if(currentTrack.id !== track.id){
            setCurrenTrack(track)
            setIsPlaying(true)
            audio.src = track.src
            audio.currentTime = 0
            audio.play()
            return
        }
        // Toggle playback state if the same track is clicked
        if(isPlaying){
            audio.pause()
            setIsPlaying(false)
        }else{
            audio.play()
            setIsPlaying(true)
        }
    }

    const value = { currentTrack, isPlaying, handleAudio}

    return <AudiaoContext.Provider value={value}>{children}</AudiaoContext.Provider>
}

export default AudioProvider