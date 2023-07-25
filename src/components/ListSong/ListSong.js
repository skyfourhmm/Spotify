import { useContext,useEffect,useState } from "react";
import { Context } from "../UseContext";

import styles from "./ListSong.module.css";
import clsx from "clsx";

function ListSong() {

    const data = useContext(Context);

    const [idSong, setIdSong] = useState(0)
    const handlePlaySong = (id_song) => {
        setIdSong(id_song)
        data.handleSetSong(idSong)
    }

    useEffect( ()=> {
        setIdSong(data.song.id)
    }, [data.song.id])

  return (
    <div className={clsx(styles.container)}>
      <table>
        <thead className={clsx(styles.header)}>
          <tr>
            <th className={clsx(styles.count)}>#</th>
            <th className={clsx(styles.title)}>Title</th>
            <th className={clsx(styles.author)}>Author</th>
            <th className={clsx(styles.download)}>
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>

        <tbody>
            {data.data.map( song => (
                <tr key={song.id}
                    onClick={() => handlePlaySong(song.id)}
                    className={`${song.id === idSong && clsx(styles.active)}`}
                >
                    <td className={clsx(styles.count)}>{song.id + 1}</td>
                    <td className={clsx(styles.title)}>{song.name}</td>
                    <td className={clsx(styles.author)}>{song.author}</td>
                    <td className={clsx(styles.download)}>
                        <i className="fa fa-download"></i>
                    </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSong;
