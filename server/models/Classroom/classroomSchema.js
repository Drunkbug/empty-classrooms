import mongoose from 'mongoose';

const { Schema } = mongoose;
const classroomSchema = new Schema({
    classroomName: String,
    _building:{ type: Schema.Types.ObjectId, ref: 'Building' },
});

mongoose.model('classrooms', classroomSchema);

export default classroomSchema;