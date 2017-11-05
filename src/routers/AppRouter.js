import React from 'react';
import Header from 'src/components/Header';
import BuildingListPage from 'src/container/BuildingListPage';
import NotFound from 'src/components/NotFound';
import ClassroomListPage from 'src/container/ClassroomListPage';
import EditClassroom from 'src/components/classroom/EditClassroom';
import EditBuilding from 'src/components/building/EditBuilding';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={BuildingListPage} exact={true} />
                <Route path='/building/:id' component={EditBuilding} exact={true} />
                <Route path='/building/:id/classroom/' component={ClassroomListPage} exact={true} />
                <Route path='/building/:id/classroom/:cid' component={EditClassroom} exact={true} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;