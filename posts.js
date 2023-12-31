const express = require("express");
const router = express.Router();
const passport = require('passport')

const postControllers = require('../controllers/post_controllers');

router.post('/create',passport.checkAuthentication,postControllers.create);
router.get('/destroy/:id',passport.checkAuthentication,postControllers.destroy);

module.exports= router;