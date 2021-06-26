const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Task', taskSchema);