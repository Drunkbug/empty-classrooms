import React from 'react';
import Classrooms from 'src/components/classroom/Classrooms';
import ControlPanel from 'src/components/ControlPanel';
import PropTypes from 'prop-types';

export default class ClassroomListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteVisibility: false,
        };
    }

    render() {
        const panelTitle="Classroom List";
        //                    buildings={this.state.buildings} in Buildings
        return (
            <div>
                <ControlPanel 
                    panelTitle={panelTitle} 
                />
                <Classrooms 
                    deleteVisibility={this.state.deleteVisibility}
                    id={this.props.match.params.id}
                />
            </div>
        );
    }
}

ClassroomListPage.propTypes = {
    match: PropTypes.object.isRequired,
};