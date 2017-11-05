import React from 'react';
import Header from '../components/Header';
import BuildingListPage from '../container/BuildingListPage';
import NotFound from '../components/NotFound';
import ClassroomListPage from '../container/ClassroomListPage';
import Classroom from '../components/Classroom';
import Classrooms from '../components/Classrooms';
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
                <Route path='/classrooms/:id' component={ClassroomListPage} />
                <Route path='/classroom/:id' component={Classroom} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;