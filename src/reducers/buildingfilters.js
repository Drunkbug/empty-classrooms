const buildingfiltersReducerDefaultState = {
    text: '',
};

const filtersReducer = (state=buildingfiltersReducerDefaultState, action) => {
    switch(action.type) {
    case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text,
        };
    default:
        return state;
    }
};

export default filtersReducer;