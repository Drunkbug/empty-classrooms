import React from 'react';
import Building from './Building'
const Buildings = (props) => {
    return (
        <div>
            <ul className='list-group'>
            {props.buildings.length ===0 && <p>Please add building to get started!</p>}
            {props.buildings.map((option) => (
                <li key={option} 
                    className='list-group-item d-flex justify-content-between align-items-center'>
                    option
                </li>
            ))}
            </ul>
        </div>
    );
}

export default Buildings;