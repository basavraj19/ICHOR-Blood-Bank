const { UserService } =require('../services');

const { StatusCodes } =require('http-status-codes');

const { Successresponse, Errorrespones } =require('../utils/common');

async function NewUser(req,res){
    try {
        const response =await UserService.createUser({
            userName : req.body.userName,
            name: req.body.name,
            password : req.body.password,
            age: req.body.age,
            contactNo : req.body.contactNo,
            bloodGroup : req.body.bloodGroup,
            address: req.body.address
        });
        Successresponse.data=response;
        res.status(StatusCodes.CREATED).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        res.status(error.statuscode).json(Errorrespones);
    }
}

async function UserLogin(req,res){
    try {
       const response =await UserService.UserLogin({
         userName : req.body.userName,
         password : req.body.password
       })   
       Successresponse.data = response;
       res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        res.status(error.statuscode).json(Errorrespones);
    }
}

async function DeleteUser(req,res){
    try {
       const response =await UserService.deleteUser(req.query);
       Successresponse.data=response;
       res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        res.status(error.statuscode).json(Errorrespones);
    }
}

async function updateUserData(req,res){
    try {
       const response =await UserService.updateUserData({
            userName : req.body.userName,
            name: req.body.name,
            password : req.body.password,
            age: req.body.age,
            contactNo : req.body.contactNo,
            bloodGroup : req.body.bloodGroup,
            address: req.body.address
       });
       Successresponse.data=response;
       res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        res.status(error.statuscode).json(Errorrespones);
    }
}

module.exports ={
    NewUser,
    UserLogin,
    DeleteUser,
    updateUserData
}