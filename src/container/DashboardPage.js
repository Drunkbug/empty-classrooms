import React from 'react';
import Header from '../components/Header';
import Buildings from '../components/Buildings';
import ControlPanel from '../components/ControlPanel';

export default class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddBuilding = this.handleAddBuilding.bind(this);
        this.state = {
            buildings: ['Ryder Hall', 'Snell Library']
        }
    };

    handleAddBuilding(buildingName) {
        console.log(buildingName);
    }

    render() {
        const panelTitle="Building List";
        return (
            <div>
                <Header />
                <ControlPanel 
                    panelTitle={panelTitle} 
                    handleAddBuilding={this.handleAddBuilding} 
                />
                <Buildings 
                    buildings={this.state.buildings}
                />
            </div>
        );
    }

}