import database from 'src/firebase/firebase';

// ADD_BUILDING
export const addBuilding = ( building ) => ({
    type: 'ADD_BUILDING',
    building,
});

export const startAddBuilding = ( name ) => {
    return (dispatch) => {
        // const {
        //     name= '',
        // } = buildingData;
        const building = { name: name, classrooms: {} };
        database.ref('buildings').push(building).then((ref) => {
            dispatch(addBuilding({
                id: ref.key,
                ...building,
            }));
        });
    };
};

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

// SET_BUILDINGS
export const setBuildings = (buildings) => ({
    type: 'SET_BUILDINGS',
    buildings,
});

export const startSetBuildings = () => {
    return (dispatch) => {
        // this return allows the index.js' promise after loading... work
        return database.ref('buildings').once('value').then((snapshot) =>{
            const buildings = [];
            snapshot.forEach((childSnapshot) => {
                buildings.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val(),
                });
            });
            dispatch(setBuildings(buildings));
        });
    };
};