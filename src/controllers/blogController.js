const blogModel = require('../models/blogModel')

const createBlog = async function(req, res) {
    try {
    let author = req.body
    if(!author) {
        res.send("Author is not Present");
    }
    let savedData = await blogModel.create(author);
    res.status(201).send({status:true , msg: savedData})
}catch(err){
    res.status(500).send({msg: err.message})
}
}
module.exports.createBlog = createBlog