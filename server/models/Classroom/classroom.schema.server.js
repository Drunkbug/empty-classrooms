const mongoose = require('mongoose');
const { Schema } = mongoose;

const classroomSchema = new Schema({
    classroomName: String,
});

mongoose.model('classrooms', classroomSchema);