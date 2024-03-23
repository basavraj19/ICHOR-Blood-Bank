const { StatusCodes } = require('http-status-codes');
const { DonarService } = require('../services');

const { Successresponse, Errorrespones } = require('../utils/common');

async function newDonar(req, res) {
    try {
        const response = await DonarService.newDonar({
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dateOfBirth: req.body.dateOfBirth,
            contactNumber: req.body.contactNumber,
            bloodGroup: req.body.bloodGroup,
            gender: req.body.gender
        });
        Successresponse.data = response;
        res.status(StatusCodes.CREATED).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        res.status(error.statuscode).json(Errorrespones);
    }
}

async function deleteDonar(req, res) {
    try {
        const response = await DonarService.deleteDonar(req.query);
        Successresponse.data = response;
        res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        res.status(error.statuscode).json(Errorrespones);
    }
}

async function getDonar(req, res) {
    try {
        const response = await DonarService.getDonar(req.query);
        Successresponse.data = response;
        res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        res.status(error.statuscode).json(Errorrespones);
    }
}

async function getAllDonars(req, res) {
    try {
        const response = await DonarService.getAllDonars();
        Successresponse.data = response;
        res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        res.status(error.statuscode).json(Errorrespones);
    }
}

async function updateDonarData(req, res) {
    try {
        const response = await DonarService.updateDonarData({
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dateOfBirth: req.body.dateOfBirth,
            contactNumber: req.body.contactNumber,
            bloodGroup: req.body.bloodGroup,
            gender: req.body.gender
        });
        Successresponse.data = response;
        res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        res.status(error.statuscode).json(Errorrespones);
    }
}

module.exports = {
    newDonar,
    deleteDonar,
    getDonar,
    getAllDonars,
    updateDonarData
}