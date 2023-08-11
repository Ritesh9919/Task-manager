module.exports.getAllTask = (req, res) =>{
   return res.json({
    success:true,
    message:'tasks'
   })
}


module.exports.createTask = (req, res) => {
    return res.json({
        success:true,
        message:'Task created'
    })
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

