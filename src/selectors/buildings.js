// get visible buildings
const getVisibleBuildings = (buildings, {text}) => {
    return buildings.filter((building) => {
        const textMatch = building.name.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    });
};

export default getVisibleBuildings;