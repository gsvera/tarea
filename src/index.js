import React from 'react';
import ReactDOM from 'react-dom';
import "./style/style.scss"
import App from './Components/App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root')

ReactDOM.render(<App />, root);

serviceWorker.unregister();
