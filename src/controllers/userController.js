const { UserService } = require('../services');

const { StatusCodes } = require('http-status-codes');

const { Successresponse, Errorrespones } = require('../utils/common');

async function NewUser(req, res) {
    try {
        const response = await UserService.createUser({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            password: req.body.password
        });
        Successresponse.data = response;
        res.status(StatusCodes.CREATED).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        res.status(error.statuscode).json(Errorrespones);
    }
}

async function UserLogin(req, res) {
    try {
        const response = await UserService.UserLogin({
            userName: req.body.userName,
            password: req.body.password
        })
        Successresponse.data = response;
        res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        res.status(error.statuscode).json(Errorrespones);
    }
}

async function DeleteUser(req, res) {
    try {
        const response = await UserService.deleteUser(req.query);
        Successresponse.data = response;
        res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        res.status(error.statuscode).json(Errorrespones);
    }
}

async function updateUserData(req, res) {
    try {
        const response = await UserService.updateUserData({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            password: req.body.password
        });
        Successresponse.data = response;
        res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        res.status(error.statuscode).json(Errorrespones);
    }
}

module.exports = {
    NewUser,
    UserLogin,
    DeleteUser,
    updateUserData
}