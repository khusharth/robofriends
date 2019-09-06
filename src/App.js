import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
//Using { robots } as we are passing more than 1 value i.e (10 robots)
import { robots } from './robots';

const App = () => {
    return (
        <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox />
        {/* Card List is accepting a robots props */}
        <CardList robots={robots}/>
        </div>
    );
}

export default App;