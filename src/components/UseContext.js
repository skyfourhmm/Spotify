import { createContext, useState } from 'react'
import data from '../data/songs.json'


const Context = createContext()

function Provider({children}) {

    const [song, setSong] = useState(data[0])
    const handleSetSong = (idSong) => {
        const songId = data.find(s => s.id === idSong)
        
        if(!songId) {
            setSong(data[0])
        } else {
            setSong(songId)
        }
    }

    return (
            <Context.Provider value={{data,song,handleSetSong}}>
                {children}
            </Context.Provider>
    )
}

export {Context, Provider}