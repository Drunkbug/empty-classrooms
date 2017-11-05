import React from 'react';
import Buildings from 'src/components/building/Buildings';
import BuildingControlPanel from 'src/components/building/BuildingControlPanel';
const DashboardPage = (props) => (
    <div>
        <BuildingControlPanel />
        <Buildings />
    </div>
);

export default DashboardPage;