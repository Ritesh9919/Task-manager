const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        maxLength:20
    },
    completed:{
        type:Boolean,
        default:false
    }
}, {timestamps:true});


const Tasks = mongoose.model('Tasks', taskSchema);
module.exports = Tasks;