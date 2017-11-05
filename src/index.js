import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from 'src/routers/AppRouter';
import configStore from 'src/store/configStore';
import Header from 'src/components/Header';
import { startSetBuildings } from 'src/actions/buildings';
import 'src/styles/styles.scss';
import 'src/firebase/firebase';
// import { startSetClassrooms } from 'src/actions/classrooms';

const store = configStore();
// const buildingOne = store.dispatch(addBuilding('Ryder Hall'));
// store.dispatch(addBuilding('Doge Hall'));
// store.dispatch(addClassroom(buildingOne.building.id, '301'));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(<div className='container'><Header /><p>Loading...</p></div>, document.getElementById('app'));

//store.dispatch(startSetClassrooms());
store.dispatch(startSetBuildings()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));    
});