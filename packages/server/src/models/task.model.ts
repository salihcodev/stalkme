import mongoose from 'mongoose';
const { Schema } = mongoose;

// create task schema:
// >>>> task schema
const taskSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    title: String,
    message: String,
    priority: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

// >>>> create task model
const Task = mongoose.model('Task', taskSchema);
export default Task;
