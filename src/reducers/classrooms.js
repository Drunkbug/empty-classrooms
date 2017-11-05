const classroomsReducerDefaultState = [];

const classroomsReducer = (state=classroomsReducerDefaultState, action) => {
    switch (action.type) {
    case 'ADD_CLASSROOM':
        return [...state, action.classroom];
    default:
        return state;
    }
};

export default classroomsReducer;