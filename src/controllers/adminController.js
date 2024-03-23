const { StatusCodes } = require('http-status-codes');

const { Successresponse, Errorrespones } = require('../utils/common');

const { AdminService } = require('../services');

async function NewAdmin(req, res) {
    try {
        const response = await AdminService.createNewAdmin({
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

async function deleteAdmin(req, res) {
    try {
        const response = await AdminService.deleteAdmin({
            userName: req.body.userName
        });
        Successresponse.data = response;
        res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        res.status(error.statuscode).json(Errorrespones);
    }
}

async function getAdmin(req, res) {
    try {
        const response = await AdminService.getAdminbyUserName(req.query);
        Successresponse.data = response;
        res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        res.status(error.statuscode).json(Errorrespones);
    }
}

async function updateAdminData(req,res){
    try {
        const response = await AdminService.updateAdminData({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
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

module.exports = {
    NewAdmin,
    deleteAdmin,
    getAdmin,
    updateAdminData
}