const {createCustomError} = require('../error/custom_error');
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


module.exports.getTask = async (req, res, next) =>{
    try {
        const {id} = req.params;
        const task = await Tasks.findById(id);
        if(!task) {
            return next(createCustomError(`no task with this ${id}`, 404));

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


module.exports.updateTask = async(req, res, next) => {
    try {
        const {id} = req.params;
        const task = await Tasks.findByIdAndUpdate({_id:id}, req.body, {
            new:true,
            runValidators:true,
            overwrite:true
        });
        if(!task) {
            return next(createCustomError(`no task with this ${id}`, 404));
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


module.exports.deleteTask = async (req, res, next) => {
    try {
        const {id} = req.params;
        const task = await Tasks.findOneAndDelete({_id:id});
        if(!task) {
            return next(createCustomError(`no task with this ${id}`, 404));
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

