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

export const startRemoveBuilding = (id) => {
    return (dispatch) => {
        return database.ref(`buildings/${id}`).remove().then(() => {
            dispatch(removeBuilding(id));
        });
    };
};

// SET_BUILDING_NAME
export const setBuildingName = (id, name) => ({
    type: 'SET_BUILDING_NAME',
    id,
    name: name,
});

export const startSetBuildingName = (id, name) => {
    return (dispatch) => {
        return database.ref(`buildings/${id}`).update({name: name}).then(() => {
            dispatch(setBuildingName(id, name));
        });
    };
};

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
            const classList = [];
            snapshot.forEach((childSnapshot) => {
                // fetch classrooms ids
                childSnapshot.classrooms && 
                (childSnapshot.classrooms.forEach((classroomSnapshot) => {
                    classList.push(classroomSnapshot.val());
                }));
                buildings.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val(),
                    classrooms: classList,
                });
            });
            dispatch(setBuildings(buildings));
        });
    };
};

// ADD_CLASSROOM_TO_BUILDING
export const addClassroomToBuilding = ( id, cid ) => ({
    type: 'ADD_CLASSROOM_TO_BUILDING',
    id, 
    cid,
});

export const startAddClassroomToBuilding = ( id, cid ) => {
    return (dispatch) => {
        database.ref(`buildings/${id}/classrooms`).push(cid).then((ref) => {
            dispatch(addClassroomToBuilding(id, cid));
        });
    };
};