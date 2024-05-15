import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Todo = mongoose.model('todo', TodoSchema);

export default Todo;