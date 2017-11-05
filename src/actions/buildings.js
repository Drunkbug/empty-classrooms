import uuid from 'uuid';

// ADD_BUILDING
export const addBuilding = ( name ) => ({
    type: 'ADD_BUILDING',
    building: {
        id: uuid(),
        name: name,
        classrooms: [],
    },
});

// REMOVE_BUILDING
export const removeBuilding = ( id ) => ({
    type: 'REMOVE_BUILDING',
    id,
});

// SET_BUILDING_NAME
export const setBuildingName = (id, name) => ({
    type: 'SET_BUILDING_NAME',
    id,
    name: name,
});