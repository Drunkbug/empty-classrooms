import React from 'react';
import AddBuilding from './AddBuilding';
import BuildingListFilter from './BuildingListFilter';

const BuildingControlPanel = () => (
    <div className='container'>
        <div className='float-right ml-1'>
            <BuildingListFilter />
            <AddBuilding />
        </div>
    </div>
);

export default BuildingControlPanel;
