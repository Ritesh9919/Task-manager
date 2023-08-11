const Tasks = require('../models/task');

module.exports.getAllTask = async (req, res) =>{
    try {
        const tasks = await Tasks.find({});
        return res.status(200).json({
            success:true,
            data:{
                tasks:tasks
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:'Internal Server Error'
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
        success:true,
        data:task
    })
}catch(err) {
    console.log(err);
    return res.status(500).json({
        msg:'Internal Server Error'
    })
}

}


module.exports.getTask = async (req, res) =>{
    try {
        const {id} = req.params;
        const task = await Tasks.findById(id);
        return res.status(200).json({
            success:true,
            data:{
                task:task
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(5000).json({
            msg:'Internal Server Error'
        })
    }
}


module.exports.updateTask = (req, res) => {
    return res.json({
        success:true,
        message:'updated'
    })
}


module.exports.deleteTask = (req, res) => {
    return res.json({
        success:true,
        message:'deleted'
    })
}

