import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue' 
                type='Search' 
                placeholder='Search robots' 
                onChange={searchChange}
                // OnChange call the searchchange function
            />
        </div>
    );
}

export default SearchBox;