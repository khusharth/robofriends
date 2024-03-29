import React from 'react';
import Card from './Card';

// CardList Component having robot prop
const CardList = ({ robots }) => {
    // Throwing Error
    // if (true) {
    //     throw new Error('Noooooooo');
    // }
    return (
        <div>
            {
            robots.map((user, i) => {
                return ( 
                <Card
                    key={i}
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email} 
                    /> 
                );
            })
            }
        </div>
    );
}

export default CardList;