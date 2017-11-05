import { createStore, combineReducers } from 'redux';
import buildingsReducer from '../reducers/buildings';
import classroomsReducer from '../reducers/classrooms';
import buildingfilters from '../reducers/buildingfilters';

export default () => {
    // store creation
    const store = createStore(
        combineReducers({
            buildings: buildingsReducer,
            classrooms: classroomsReducer,
            buildingfilters: buildingfilters,
        })
    );
    return store;
};

