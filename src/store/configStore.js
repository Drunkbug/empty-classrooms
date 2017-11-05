import { createStore, combineReducers, applyMiddleware } from 'redux';
import buildingsReducer from 'src/reducers/buildings';
import classroomsReducer from 'src/reducers/classrooms';
import buildingfilters from 'src/reducers/buildingfilters';
import addClassroomReducer from 'src/reducers/addclassroom';
import thunk from 'redux-thunk';

export default () => {
    // store creation
    const store = createStore(
        combineReducers({
            buildings: buildingsReducer,
            classrooms: classroomsReducer,
            buildingfilters: buildingfilters,
            addclassroom: addClassroomReducer,
        }),
        applyMiddleware(thunk)
    );
    return store;
};

