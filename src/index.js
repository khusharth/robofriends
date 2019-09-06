import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
//Using { robots } as we are passing more than 1 value i.e (10 robots)
import { robots } from './robots';

ReactDOM.render(
        //Card List is accepting a robots props
        <CardList robots={robots}/>
    , document.getElementById('root'));
serviceWorker.unregister();
