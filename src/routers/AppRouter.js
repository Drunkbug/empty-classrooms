import React from 'react';
import Header from '../components/Header';
import IndexPage from '../container/IndexPage';
import NotFound from '../components/NotFound';
import Classrooms from '../components/Classrooms';
import Classroom from '../components/Classroom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={IndexPage} exact={true} />
                <Route path='/building/:id' component={Classrooms} />
                <Route path='/classroom/:id' component={Classroom} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;