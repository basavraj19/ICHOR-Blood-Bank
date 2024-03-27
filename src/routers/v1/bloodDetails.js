const express = require('express');

const router= express.Router();

const { BloodDetailController } = require('../../controllers');

router.post('/',BloodDetailController.createNewBloodDetailEntry);

router.post('/delete',BloodDetailController.deleteBloodDetailEntry);

router.post('/getDetail',BloodDetailController.getBloodDetailEntry);

router.patch('/',BloodDetailController.updateBloodDetailEntry);

router.post('/bloodGroup',BloodDetailController.getBloodDetailByBloodGroup);

router.get('/',BloodDetailController.getBloodDetailByBloodType);

module.exports=router;