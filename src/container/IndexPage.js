import React from 'react';
import Header from '../components/Header';
import DashboardPage from '../container/DashboardPage';

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='container'>
                <Header />
                <DashboardPage />
            </div>
        );
    }
}