import uuid from 'uuid';

// ADD_CLASSROOM
export const addClassroom = ( bid, name ) => ({
    type: 'ADD_CLASSROOM',
    classroom: {
        id: uuid(),
        bid: bid,
        name: name,
        schedule: [],
    },
});
// REMOTE_CLASSROOM
// SET_CLASSROOM_NAME
// SET_START_DATE
// SET_END_DATE
// SET_DAY
// SET_START_TIME
// SET_END_TIME