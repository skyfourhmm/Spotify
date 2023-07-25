
import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import {BrowserRouter} from 'react-router-dom'

import App from './App'
import {Provider} from './components/UseContext'

// Render component App vào #root element
ReactDOM.render(
    <BrowserRouter>
        <div>
            <Provider>
                <App/>
            </Provider>
        </div>
    </BrowserRouter>,
document.getElementById('root'));

