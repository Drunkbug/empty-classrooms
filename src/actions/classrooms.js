export const ADD_CLASSROOM = 'ADD_CLASSROOM';
export const ADD_CLASSROOM_SUCCESS = 'ADD_CLASSROOM_SUCCESS';
export const ADD_CLASSROOM_ERROR = 'ADD_CLASSROOM_ERROR';

// ADD_CLASSROOM
const addClassroom = (classroom) => ({
    type: 'ADD_CLASSROOM_SUCCESS',
    classroom,
});

// const addClassroomRequest = () => {
//     return {
//         type: 'ADD_CLASSROOM',
//     };
// };

// const addClassroomError = (e) => {
//     return {
//         type: 'ADD_CLASSROOM_ERROR',
//         payload: e,
//     };
// };

const addClassRoomToBuildingList  = (id, cid) => ({
    type: 'ADD_CLASSROOM_TO_BUILDING_LIST',
    id,
    cid,
});


export const startAddClassroom = (id, name) => {
    return (dispatch) => {
        // dispatch(addClassroomRequest());
        const classroom = { name: name, schedules: {} };
        database.ref('classrooms').push(classroom).then((ref) => {
            dispatch(addClassroom({ cid: ref.key, ...classroom }));
            database.ref(`buildings/${id}/classrooms`).push(ref.key).then(() => {
                dispatch(addClassRoomToBuildingList( id, ref.key ));
            });
        });

        // .catch((e) => {
        //     dispatch(addClassroomError(e));
        // });
    };
};

// EMPTY_CLASSROOM TEMPORARY SOLUTION, NEED TO CHANGE LATER
export const emptyClassroom = () => ({
    type: 'EMPTY_CLASSROOM',
});

// SET_CLASSROOM
export const setClassroom = (classroom) => ({
    type: 'SET_CLASSROOM',
    classroom,
});

export const startSetClassrooms = (id) => {
    return (dispatch) => {     
        // this return allows the index.js' promise after loading... work
        database.ref(`buildings/${id}/classrooms`).once('value').then((snapshot) => {
            let scheduleList = [];   
            dispatch(emptyClassroom());            
            snapshot.forEach((childSnapshot) => {
                const cid = childSnapshot.val();
                // fetch classroom one by one
                // TODO change to handle error!!!!!
                database.ref(`classrooms/${cid}`).once('value').then((classroomsSnapshot) => {
                    const snapshotSchedules = classroomsSnapshot.val().schedules;
                    for (const k in snapshotSchedules) {
                        scheduleList.push(snapshotSchedules[k]);
                    }
                    const classroom ={
                        cid: classroomsSnapshot.key,
                        ...classroomsSnapshot.val(),
                        schedules: scheduleList,
                    };
                    dispatch(setClassroom(classroom));
                    scheduleList=[];
                });
                
            });
        });
    };
};

// REMOVE_CLASSROOM
// EDIT_CLASSROOM