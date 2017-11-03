// get visible buildings
const getVisibleBuildings = (buildings) => {
    return buildings.sort((b1, b2) => {
        if (b1.name < b2.name) {
            return -1;
        }
        if (b1.name > b2.name) {
            return 1;
        }
        if (b1.name === b2.name) {
            return 0;
        }
    });
};

export default getVisibleBuildings;