const express =require('express');

const router =express.Router();

const { UserController }=require('../../controllers');

const { UserMiddleware }=require('../../middlewares');

router.post('/signUp',UserMiddleware.validdateCreateUserRequest,UserController.NewUser);

router.post('/signIn',UserMiddleware.validateUser,UserController.UserLogin);

router.delete('/',UserController.DeleteUser);

router.put('/',UserController.updateUserData);

module.exports = router;