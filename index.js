const express= require ("express");
const router = express.Router();
const homeController = require("../controllers/home_contollers");
 
 
router.get("/",homeController.home);
router.use('/user',require('./user'));
router.use('/posts',require('./posts'));
router.use('/comments',require('./comments'))
console.log("router loaded");



module.exports= router;