import React from 'react';
import Buildings from '../components/Buildings';
import BuildingControlPanel from '../components/BuildingControlPanel';
export default class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddBuilding = this.handleAddBuilding.bind(this);
        this.handleDeleteBuilding = this.handleDeleteBuilding.bind(this);
        this.handleEditBuildings = this.handleEditBuildings.bind(this);
        this.state = {
            buildings: [],
            deleteVisibility: false,
        };
    }

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
            buildings: prevState.buildings.concat(buildingName),
        }));
    }

    handleDeleteBuilding(buildingName) {
        this.setState((prevState) => ({
            buildings: prevState.buildings.filter((building) => buildingName !== building),
        }));
    }

    handleEditBuildings() {
        this.setState((prevState) => ({deleteVisibility: !prevState.deleteVisibility}));

    }

    render() {
        return (
            <div>
                <BuildingControlPanel />
                <Buildings 
                    deleteVisibility={this.state.deleteVisibility}
                    handleDeleteBuilding={this.handleDeleteBuilding}
                />
            </div>
        );
    }

}