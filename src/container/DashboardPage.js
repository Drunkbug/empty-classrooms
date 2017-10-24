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

    componentDidMount() {
        try {
            const json = localStorage.getItem('buildings');
            const buildings = JSON.parse(json);

            if(buildings) {
                this.setState(() => ({ buildings: buildings}));
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.buildings.length !== this.state.buildings.length) {
            const json = JSON.stringify(this.state.buildings);
            localStorage.setItem('buildings', json);
        }
    }

    handleAddBuilding(buildingName) {
        if (!buildingName) {
            return 'Please enter a valid building name.';
        } else if (this.state.buildings.indexOf(buildingName) > -1) {
            return 'This building already exist.';
        }

        this.setState((prevState) => ({
            buildings: prevState.buildings.concat(buildingName)
        }));
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