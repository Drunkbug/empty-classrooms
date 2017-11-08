import { Record } from 'immutable';
import {
    ADD_BUILDING,
    ADD_BUILDING_ERROR,
    ADD_BUILDING_SUCCESS,
} from 'src/actions/addBuilding';

const addBuildingState = new Record({
    isLoading: false,
    success: false,
    error: '',
    payload: '',
});

const addBuildingReducer = (state= new addBuildingState(), {type, payload}) => {
    switch(type) {
    case ADD_BUILDING:
        return state.merge({
            isLoading: true,
        });
    case ADD_BUILDING_SUCCESS:
        return state.merge({
            isLoading: false,
            success: true,
            error: '',
            payload,
        });
    case ADD_BUILDING_ERROR:
        return state.merge({
            isLoading: false,
            success: false,
            error: payload,
        });
    default:
        return state;
    }
};

export default addBuildingReducer;