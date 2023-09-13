const express= require('express');
const userController = require("../controllers/user_controller");
const passport = require('passport');
const router= express.Router();

router.get("/profile/:id",passport.checkAuthentication ,userController.profile);
router.post("/update/:id",passport.checkAuthentication ,userController.update);

//calling sign up page 
router.get('/sign-up',userController.signUp);
//calling sign in page 
router.get('/sign-in',userController.signIn);




// to get sign up page 
router.post('/create',userController.create);

// to get sign in page 
// to create as ssion use passport as midlle ware to auth
router.post('/create-session',passport.authenticate(
    "local",
    {failureRedirect:"/user/sign-in"}


),userController.createSession);

//signout routing
router.get('/sign-out',userController.destroySession);

module.exports=router;
   