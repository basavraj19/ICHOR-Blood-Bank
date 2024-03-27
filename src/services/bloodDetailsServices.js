const { BloodDetailsRepository } = require('../repository');

const BloodDetails = new BloodDetailsRepository();

const { StatusCodes } =require('http-status-codes');

const { AppError } = require('../utils');

async function createNewBloodDetailEntry(data){
   try {
     const response = await BloodDetails.create(data);
     return response;
   } catch (error) {
      console.log(error);
      throw new AppError('Something went wrong while creating new BloodDetail Entry',StatusCodes.INTERNAL_SERVER_ERROR);
   }
}

async function deleteEntry(data){
   try {
      const response = await BloodDetails.delete(data.id);
      return response;
   } catch (error) {
      throw new AppError('Something went wrong while Deleting BloodDetail Entry',StatusCodes.INTERNAL_SERVER_ERROR);
   }
}

async function updateBloodDetailEntry(data){
    try {
      const response = await BloodDetails.update(data.id,data);
      return response;
    } catch (error) {
      console.log(error);
      throw new AppError('Something went wrong while Updating Data',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getBloodDetailEntry(data){
   try {
      const entry = await BloodDetails.get(data.id);
      return entry;
   } catch (error) {
      throw new AppError('Something went wrong while Fetching Data',StatusCodes.INTERNAL_SERVER_ERROR);
   }
}

async function getBloodDetailByBloodGroup(data){
   try {
      const respones=await BloodDetails.getBloodDetailByBloodGroup(data.bloodGroup);
      return respones;
   } catch (error) {
      console.log(error);
      throw new AppError('Something went wrong while Fetching Data',StatusCodes.INTERNAL_SERVER_ERROR);
   }
}

async function getBloodDetailByBloodType(query){
   try {
      console.log(query);
      const response=await BloodDetails.getBloodDetailByBloodType(query.bloodType);
      return response;
   } catch (error) {
      throw new AppError('Something went wrong while Fetching Data',StatusCodes.INTERNAL_SERVER_ERROR);
   }
}



module.exports={
    createNewBloodDetailEntry,
    deleteEntry,
    updateBloodDetailEntry,
    getBloodDetailEntry,
    getBloodDetailByBloodGroup,
    getBloodDetailByBloodType
}