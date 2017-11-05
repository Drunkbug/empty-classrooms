const buildingsReducerDefaultState = [];

const buildingsReducer = (state=buildingsReducerDefaultState, action) => {
    switch(action.type) {
    case 'ADD_BUILDING':
        return [...state, action.building];
    case 'REMOVE_BUILDING':
        return state.filter(({id}) => id !== action.id);
    case 'SET_BUILDING_NAME':
        return state.map((building) => {
            if (building.id === action.id) {
                const name = action.name;
                return {
                    ...building,
                    name,
                };
            } else {
                return building;
            }
        });
    case 'SET_BUILDINGS':
        return action.buildings;
    default:
        return state;
    }
};

export default buildingsReducer;