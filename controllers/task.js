const Tasks = require('../models/task');

module.exports.getAllTask = (req, res) =>{
   return res.json({
    success:true,
    message:'tasks'
   })
}


module.exports.createTask = async (req, res) => {
    try{
    const {name, completed} = req.body;
    const task = await Tasks.create({
        name:name,
        completed:completed
    });
    return res.status(200).json({
        success:true,
        data:task
    })
}catch(err) {
    console.log(err);
}

}


module.exports.getTask = (req, res) =>{
    return res.json({
        success:true,
        message:'task'
    })
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

