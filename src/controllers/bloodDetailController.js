const { StatusCodes } = require('http-status-codes');
const { BloodDetailService } = require('../services');

const { Successresponse, Errorrespones } = require('../utils/common');

async function createNewBloodDetailEntry(req, res) {
   try {
      const response = await BloodDetailService.createNewBloodDetailEntry({
         DonarId: req.body.DonarId,
         bloodType: req.body.bloodType,
         bloodGroup: req.body.bloodGroup,
         bloodweight: req.body.bloodWeight,
         collectionDate: req.body.collectionDate,
         expiryDate: req.body.expiryDate,
         processingStatus: req.body.processingStatus
      });
      Successresponse.data = response;
      res.status(StatusCodes.CREATED).json(Successresponse);
   } catch (error) {
      Errorrespones.error = error;
      res.status(error.statuscode).json(Errorrespones);
   }
}

async function deleteBloodDetailEntry(req, res) {
   try {
      const response = await BloodDetailService.deleteEntry({
         id: req.body.id
      });
      Successresponse.data = response;
      res.status(StatusCodes.CREATED).json(Successresponse);
   } catch (error) {
      Errorrespones.error = error;
      res.status(error.statuscode).json(Errorrespones);
   }
}

async function updateBloodDetailEntry(req, res) {
   try {
      const response = await BloodDetailService.updateBloodDetailEntry({
         id : req.body.id,
         DonarId: req.body.DonarId,
         bloodType: req.body.bloodType,
         bloodweight: req.body.bloodWeight,
         collectionDate: req.body.collectionDate,
         expiryDate: req.body.expiryDate,
         processingStatus: req.body.processingStatus
      });
      Successresponse.data = response;
      res.status(StatusCodes.CREATED).json(Successresponse);
   } catch (error) {
      Errorrespones.error = error;
      res.status(error.statuscode).json(Errorrespones);
   }
}

async function getBloodDetailEntry(req, res) {
   try {
      const response = await BloodDetailService.getBloodDetailEntry({
         id: req.body.id
      });
      Successresponse.data = response;
      res.status(StatusCodes.CREATED).json(Successresponse);
   } catch (error) {
      Errorrespones.error = error;
      res.status(error.statuscode).json(Errorrespones);
   }
}

async function getBloodDetailByBloodGroup(req,res){
   try {
      const response =await BloodDetailService.getBloodDetailByBloodGroup({
         bloodGroup : req.body.bloodGroup
      });
      Successresponse.data = response;
      res.status(StatusCodes.CREATED).json(Successresponse);
   } catch (error) {
      Errorrespones.error = error;
      res.status(error.statuscode).json(Errorrespones);
   }
}

async function getBloodDetailByBloodType(req,res){
   try {
      const response =await BloodDetailService.getBloodDetailByBloodType(req.query);
      Successresponse.data = response;
      res.status(StatusCodes.CREATED).json(Successresponse);
   } catch (error) {
      Errorrespones.error = error;
      res.status(error.statuscode).json(Errorrespones);
   }
}

module.exports = {
   createNewBloodDetailEntry,
   deleteBloodDetailEntry,
   updateBloodDetailEntry,
   getBloodDetailEntry,
   getBloodDetailByBloodGroup,
   getBloodDetailByBloodType
}