import { createStore, combineReducers, applyMiddleware } from 'redux';
import buildingsReducer from 'src/reducers/buildings';
import classroomsReducer from 'src/reducers/classrooms';
import buildingfilters from 'src/reducers/buildingfilters';
import thunk from 'redux-thunk';

export default () => {
    // store creation
    const store = createStore(
        combineReducers({
            buildings: buildingsReducer,
            classrooms: classroomsReducer,
            buildingfilters: buildingfilters,
        }),
        applyMiddleware(thunk)
    );
    return store;
};

