const mongoose = require('mongoose');
const { Schema }  = mongoose;
const ClassroomSchema = require('./Classroom');
const buildingSchema = new Schema({
    buildingName: String,
    classrooms: [ClassroomSchema],
});

mongoose.model('buildings', buildingSchema);