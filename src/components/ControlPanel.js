import React from 'react';
import AddBuilding from './AddBuilding';
import EditBuildings from './EditBuildings';
const ControlPanel = (props) => {
    return (
        <div className='jumbotron'>
            <div className='container'>
                { props.panelTitle && <h5>{props.panelTitle}</h5> }
                <AddBuilding handleAddBuilding={props.handleAddBuilding} />
                <EditBuildings 
                    handleEditBuildings={props.handleEditBuildings} 
                    deleteVisibility={props.deleteVisibility}
                />
            </div>
        </div>
    );
}

export default ControlPanel;