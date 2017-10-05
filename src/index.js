import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/MyNavbar";
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import "./css/index.css";

ReactDOM.render((
    <div>
        <Navbar/>
        <App/>
    </div>
), document.getElementById('root'));

// registerServiceWorker();
