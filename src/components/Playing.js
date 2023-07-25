import React from "react"
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';

import { useContext } from "react";
import { Context } from "./UseContext";

function Playing() {

    const data = useContext(Context);
    const handleClickPre = () => {
        data.handleSetSong(data.song.id - 1)
    }
    const handleClickNext = () => {
        data.handleSetSong(data.song.id + 1)
    }

    return (
        <AudioPlayer src={data.song.url} 
        showSkipControls={true} 
        showJumpControls={false}
        onClickPrevious={handleClickPre}
        onClickNext={handleClickNext}
        />
    )
}

export default Playing