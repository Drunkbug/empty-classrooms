import database from 'src/firebase/firebase';

// ADD_CLASSROOM
export const addClassroom = ( classroom ) => ({
    type: 'ADD_CLASSROOM',
    classroom,
});


export const startAddClassroom = ( name ) => {
    return (dispatch) => {
        const classroom = { name: name, schedules: {} };
        return database.ref('classrooms').push(classroom).then((ref) => {
            dispatch(addClassroom({
                cid: ref.key,
                ...classroom,
            }));
        });
    };
};
// SET_CLASSROOM
export const setClassrooms = (classrooms) => ({
    type: 'SET_CLASSROOM',
    classrooms,
});

export const startSetClassrooms = () => {
    return (dispatch) => {
        // this return allows the index.js' promise after loading... work
        return database.ref('classrooms').once('value').then((snapshot) =>{
            const classrooms = [];
            const scheduleList = [];
            snapshot.forEach((childSnapshot) => {
                // fetch schedule ids
                childSnapshot.classrooms && 
                (childSnapshot.classrooms.forEach((classroomSnapshot) => {
                    scheduleList.push(classroomSnapshot.val());
                }));
                classrooms.push({
                    cid: childSnapshot.key,
                    ...childSnapshot.val(),
                    classrooms: scheduleList,
                });
            });
            dispatch(setClassrooms(classrooms));
        });
    };
};

// REMOVE_CLASSROOM
// EDIT_CLASSROOM