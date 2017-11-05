import React from 'react';
import BuildingList from 'src/components/building/BuildingList';
import BuildingControlPanel from 'src/components/building/BuildingControlPanel';
const DashboardPage = (props) => (
    <div>
        <BuildingControlPanel />
        <BuildingList />
    </div>
);

export default DashboardPage;