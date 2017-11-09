import axios from 'axios';

export const ADD_BUILDING = 'ADD_BUILDING';
export const ADD_BUILDING_SUCCESS = 'ADD_BUILDING_SUCCESS';
export const ADD_BUILDING_ERROR = 'ADD_BUILDING_ERROR';

const addBuilding = () => ({
    type: ADD_BUILDING,
});

const addBuildingSuccess = (name) => ({
    type: ADD_BUILDING_SUCCESS,
    payload: name,
});

const addBuildingError = (error) => ({
    type: ADD_BUILDING_ERROR,
    payload: error,
});

export const startAddBuilding = (name) => {
    return (dispatch) => {
        dispatch(addBuilding());
        const url = `/api/ec/building/create`;
        axios.post(url, {buildingName: name})
            .then(res => {
                dispatch(addBuildingSuccess(name));                
            })
            .catch(error => {
                dispatch(addBuildingError(error));
            });
    };
};