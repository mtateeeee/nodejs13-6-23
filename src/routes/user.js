const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user');

router.get('/get-all-users', userControllers.getAllUsers );

//find user by id
router.get('/getUser/:userId',userControllers.getUserById);

//find user by name and age
router.get('/getUserByNameAndAge/',userControllers.getUserByNameAndAge);

//create user
router.post('/createUser', userControllers.createUser);

//create many user

router.post('/createManyUsers', userControllers.createManyUsers);




module.exports=router;