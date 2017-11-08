export const ADD_BUILDING = 'ADD_BUILDING';
export const ADD_BUILDING_SUCCESS = 'ADD_BUILDING_SUCCESS';
export const ADD_BUILDING_ERROR = 'ADD_BUILDING_ERROR';

const addBuilding = () => ({
    type: ADD_BUILDING,
});

const addBuildingSuccess = (name) => ({
    type: ADD_BUILDING_SUCCESS,
    name,
});

const addBuildingError = (error) => ({
    type: ADD_BUILDING_ERROR,
    error,
});

export const startAddBuilding = (name) => {
    return (dispatch) => {
        dispatch(addBuilding());
        dispatch(addBuildingSuccess(name));
    };
};