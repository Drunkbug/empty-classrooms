import { createStore, combineReducers } from 'redux';
import buildingsReducer from '../reducers/buildings';
import classroomsReducer from '../reducers/classrooms';
import filtersReducer from '../reducers/filters';

export default () => {
    // store creation
    const store = createStore(
        combineReducers({
            buildings: buildingsReducer,
            classrooms: classroomsReducer,
            filters: filtersReducer,
        })
    );
    return store;
};

