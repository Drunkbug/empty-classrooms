import React from 'react';
import DashboardPage from '../container/DashboardPage';

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <DashboardPage />
            </div>
        );
    }
}