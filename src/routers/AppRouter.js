import React from 'react';
import Header from '../components/Header';
import BuildingListPage from '../container/BuildingListPage';
import NotFound from '../components/NotFound';
import ClassroomListPage from '../container/ClassroomListPage';
import Classroom from '../components/Classroom';
import Classrooms from '../components/Classrooms';
import EditBuilding from '../components/EditBuilding';
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