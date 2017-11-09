import { createStore, combineReducers, applyMiddleware } from 'redux';
import addBuildingReducer from 'src/reducers/addBuilding';
import buildingfilters from 'src/reducers/buildingfilters';
import classroomsReducer from 'src/reducers/classrooms';
import thunk from 'redux-thunk';

export default () => {
    // store creation
    const store = createStore(
        combineReducers({
            addBuilding: addBuildingReducer,
            buildingfilters: buildingfilters,
            classrooms: classroomsReducer,
        }),
        applyMiddleware(thunk)
    );
    return store;
};

