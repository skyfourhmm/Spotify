import clsx from 'clsx'
import styles from './Navbar.module.css'

import Global from '../Global/Global.js'

function Navbar() {
    return(
        <Global>
            <div className={clsx(styles.nav)}>
                <i className="fa fa-spotify"></i>
                Spotify
            </div>
        </Global>
    )
}

export default Navbar