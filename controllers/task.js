const { error } = require('console');
const Tasks = require('../models/task');

module.exports.getAllTask = async (req, res) =>{
    try {
        const tasks = await Tasks.find({});
        return res.status(200).json({
            data:{
                tasks:tasks
            }
        })
    } catch (error) {
        return res.status(500).json({
            msg:error
        })
    }
   
   
}


module.exports.createTask = async (req, res) => {
    try{
    const {name, completed} = req.body;
    const task = await Tasks.create({
        name:name,
        completed:completed
    });
    return res.status(201).json({
        data:task
    })
}catch(err) {
    return res.status(500).json({
        msg:error
    })
}

}


module.exports.getTask = async (req, res) =>{
    try {
        const {id} = req.params;
        const task = await Tasks.findById(id);
        if(!task) {
            return res.status(404).json({
                msg:`no task with this ${id}`
            })
        }
        return res.status(200).json({
            data:{
                task:task
            }
        })
    } catch (error) {
        return res.status(500).json({
            msg:error
        })
    }
}


module.exports.updateTask = (req, res) => {
    return res.json({
        success:true,
        message:'updated'
    })
}


module.exports.deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Tasks.findOneAndDelete({_id:id});
        if(!task) {
            return res.status(404).json({
                msg:`no task with this ${id}`
            })
        }

        return res.status(200).json({
            data:task
        })
    } catch (error) {
        return res.status(500).json({
            msg:error
        })
    }
}

