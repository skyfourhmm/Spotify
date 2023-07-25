import Navbar from './components/Navbar/Navbar.js'
import DetailSong from './components/DetailSong/DetailSong.js'
import ListSong from './components/ListSong/ListSong.js'
import Playing from './components/Playing.js'

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className='Contents'>
                <DetailSong/>
                <ListSong/>
            </div>
            <Playing/>
        </div>
    )
}

export default App