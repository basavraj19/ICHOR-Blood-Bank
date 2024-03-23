const { StatusCodes } = require('http-status-codes');

const { Errorrespones } = require('../utils/common');

const { AppError } = require('../utils');

function validdateCreateUserRequest(req, res, next) {
    if (!req.body.userName){
        Errorrespones.error = new AppError('UserName Missing.', StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(Errorrespones);
    } 
    else if (!req.body.firstName) {
        Errorrespones.error = new AppError('First Name Missing.', StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(Errorrespones);
    } 
    else if (!req.body.password) {
        Errorrespones.error = new AppError('Password Missing.', StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(Errorrespones);
    } 
    else if (!req.body.lastName) {
        Errorrespones.error = new AppError('Last Name Missing.', StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(Errorrespones);
    } 
    else {
        next();
    }
}

function validateUser(req,res,next){
    if (!req.body.userName){
        Errorrespones.error = new AppError('UserName Missing.', StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(Errorrespones);
    } 
    if (!req.body.password) {
        Errorrespones.error = new AppError('Password Missing.', StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(Errorrespones);
    }
    next(); 
}
module.exports ={
    validdateCreateUserRequest,
    validateUser
}