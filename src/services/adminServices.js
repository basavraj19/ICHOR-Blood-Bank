const { AdminRepository } =require('../repository');

const { StatusCodes }= require('http-status-codes');

const { AppError } = require('../utils');

const Admin = new AdminRepository();

async function createNewAdmin(data){
     try {
        const response = await Admin.create(data);
        return response;
     } catch (error) {
        throw new AppError("Something went wrong while creating new Admin",StatusCodes.INTERNAL_SERVER_ERROR); 
     }
}

async function deleteAdmin(data){
    try {
       const adminDetails = await Admin.getAdminbyUserName(data.userName);
       const response =await Admin.delete(adminDetails.id);
       return response; 
    } catch (error) {
        throw new AppError("Something went wrong while deleting Admin",StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}

async function getAdminbyUserName(query){
    try {
        const adminDetails = await Admin.getAdminbyUserName(query.userName);
        return adminDetails; 
     } catch (error) {
         console.log(error);
         throw new AppError("Something went wrong while fetching data",StatusCodes.INTERNAL_SERVER_ERROR); 
     }
}

async function updateAdminData(data){
    try {
        const adminDetails = await Admin.getAdminbyUserName(data.userName);
        const response = await Admin.update(adminDetails.id,data);
        return response; 
     } catch (error) {
         console.log(error);
         throw new AppError("Something went wrong while Updating data",StatusCodes.INTERNAL_SERVER_ERROR); 
     }
}

module.exports = {
    createNewAdmin,
    deleteAdmin,
    getAdminbyUserName,
    updateAdminData
}

