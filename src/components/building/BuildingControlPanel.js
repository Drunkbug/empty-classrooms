import React from 'react';
import PropTypes from 'prop-types';
import AddBuilding from './AddBuilding';
import BuildingListFilter from './BuildingListFilter';

export default class BuildingControlPanel extends React.Component {

    render() {
        return (
            <div className='container'>
                <div className='float-right ml-1'>
                    <BuildingListFilter />
                    <AddBuilding />
                </div>
            </div>
        );
    }
}
