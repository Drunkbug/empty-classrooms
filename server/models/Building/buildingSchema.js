import mongoose from 'mongoose';
import classroomSchema from '../Classroom/classroomSchema';
// const mongoose = require('mongoose');

const { Schema }  = mongoose;
// const ClassroomSchema = require('./Classroom/classroomSchema');
const buildingSchema = new Schema({
    buildingName: String,
    classrooms: [classroomSchema],
});

export default buildingSchema;