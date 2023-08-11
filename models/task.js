const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name:String,
    completed:Boolean
}, {timestamps:true});


const Tasks = mongoose.model('Tasks', taskSchema);
module.exports = Tasks;