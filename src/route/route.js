const express = require('express');
const router = express.Router();
const authControl= require("../controllers/authorController")
const blogControl=require("../controllers/blogController")


router.post("project-1/author", authControl.createUser)

router.post("project-1/blog", blogControl.loginUser)






module.exports = router;
