const { DonarRepository } = require('../repository');

const { StatusCodes }= require('http-status-codes');

const { AppError } = require('../utils');

const Donar =new DonarRepository();

async function newDonar(data){
    try {
        const response =await Donar.create(data);
        return response;
    } catch (error) {
        console.log(error);
        throw new AppError('something went wrong while creating new donar',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteDonar(query){
    try {
        const donarDetails = await Donar.getDonarbyUserName(query.userName);
        const response =await Donar.delete(donarDetails.id);
        return response;
    } catch (error) {
        throw new AppError('something went wrong while deleting donar',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateDonarData(data){
    try {
        const donarDetails = await Donar.getDonarbyUserName(data.userName);
        const respones = await Donar.update(donarDetails.id,data);
        return respones;
    } catch (error) {
        console.log(error);
        throw new AppError('something went wrong while updating donar data',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getDonar(data){
   try {
    const donarDetails = await Donar.getDonarbyUserName(data.userName);
    return donarDetails;
   } catch (error) {
    throw new AppError('something went wrong while fetching donar data',StatusCodes.INTERNAL_SERVER_ERROR);
   }
}

async function getAllDonars(){
    try {
        const donarDetails = await Donar.getAll();
        return donarDetails;
       } catch (error) {
        throw new AppError('something went wrong while fetching donar data',StatusCodes.INTERNAL_SERVER_ERROR);
       }
}


module.exports= {
    newDonar,
    deleteDonar,
    updateDonarData,
    getDonar,
    getAllDonars
}
