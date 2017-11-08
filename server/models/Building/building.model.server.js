module.exports = () => {
    const mongoose = require('mongoose');
    const Building = mongoose.model('Buildings');
   

    const createBuilding = (building) => {
        return Building.create(building);
    };

    const api = {
        createBuilding: createBuilding,
    };
    
    return api;

};