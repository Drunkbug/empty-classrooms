import React from 'react';
import Buildings from '../components/Buildings';

export default class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buildings:['Ryder Hall', 'Snell Library']
        }
    };

    render() {
        return(
            <div>
               <Buildings buildings={this.state.buildings} />
            
            </div>
        );
    }

}