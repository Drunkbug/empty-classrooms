import React from 'react';
import Header from 'src/components/Header';
import BuildingListPage from 'src/container/BuildingListPage';
import NotFound from 'src/components/NotFound';
import ClassroomListPage from 'src/container/ClassroomListPage';
import Classroom from 'src/components/classroom/Classroom';
import Classrooms from 'src/components/classroom/Classrooms';
import EditBuilding from 'src/components/building/EditBuilding';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const withControlPanel = (WrappedComponent) => {
    return (props) => (
        <div>
            <WrappedComponent {...props} />
        </div>
    );
};

const ClassRoomList = withControlPanel(Classrooms);

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={BuildingListPage} exact={true} />
                <Route path='/building/:id' component={EditBuilding} exact={true} />
                <Route path='/classrooms/:id' component={ClassroomListPage} exact={true} />
                <Route path='/classroom/:id' component={Classroom} exact={true} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;