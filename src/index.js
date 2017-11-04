import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configStore from './store/configStore';
import { addBuilding } from './actions/buildings';
import { addClassroom } from './actions/classrooms';
import getVisibleBuildings from './selectors/buildings';
import './styles/styles.scss';

const store = configStore();
const buildingOne = store.dispatch(addBuilding('Ryder Hall'));
store.dispatch(addBuilding('Doge Hall'));
store.dispatch(addClassroom(buildingOne.building.id, '301'));

const state = store.getState();
console.log(state);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

// login page -> Student/School 
// Student -> empty classroom lists
// Student -> personal info
// School -> dashboard(arrange buildings/classrooms)
// School -> school info