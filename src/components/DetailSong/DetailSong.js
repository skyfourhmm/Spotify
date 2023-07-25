import clsx from "clsx";
import styles from './DetailSong.module.css'

import { useContext,useEffect,useState } from "react";
import { Context } from "../UseContext";

function DetailSong() {

    const data = useContext(Context);
    const imgParent = data.song.links.images[0].url
    const imgChildren = data.song.links.images[1].url

    return (
        <div>
            <div className={clsx(styles.headertitle)}>Now playing</div>
            <div className={clsx(styles.title, styles.textContainer)}>{data.song.name}</div>
            
            <div className={clsx(styles.image)}>
                <img src={imgParent}></img>
            </div>

            <div className={clsx(styles.thumbsNail)}>
                <img src={imgChildren}></img>
                <span >{data.song.author}</span>
            </div>
        </div>
    )
}

export default DetailSong