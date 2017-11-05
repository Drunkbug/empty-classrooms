const defaultAddClassroomsState = '';

const addClassroomsReducer = (state=defaultAddClassroomsState, action) => {
    switch (action.type) {
    case 'ADD_CLASSROOM':
        return action.classroom.cid;
    default:
        return state;
    }
};

export default addClassroomsReducer;