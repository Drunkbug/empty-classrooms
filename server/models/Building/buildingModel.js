import mongoose from 'mongoose';
import buildingSchema from './buildingSchema';

let buildingModel = mongoose.model('buildings', buildingSchema);

buildingModel.createBuilding = (building) => {
    return buildingModel.create(building);
};

export default buildingModel;