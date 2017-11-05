import React from 'react';
import Buildings from '../components/Buildings';
import BuildingControlPanel from '../components/BuildingControlPanel';
const DashboardPage = (props) => (
    <div>
        <BuildingControlPanel />
        <Buildings />
    </div>
);

export default DashboardPage;