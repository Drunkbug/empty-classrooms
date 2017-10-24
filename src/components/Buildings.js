import React from 'react';
import Building from './Building'

const Buildings = (props) => {
    return (
        <div>
            <ul className='list-group'>
            {props.buildings.length ===0 && <p>Please add building to get started!</p>}
            {props.buildings.map((building) => (
                <Building 
                    key={building}
                    buildingName={building}
                />
            ))}
            </ul>
        </div>
    );
}

export default Buildings;