const express = require('express');

const router = express.Router();

const { DonarController } = require('../../controllers');

router.post('/',DonarController.newDonar);

router.delete('/',DonarController.deleteDonar);

router.get('/',DonarController.getAllDonars);

router.get('/filter',DonarController.getDonar);

router.patch('/',DonarController.updateDonarData);

module.exports=router;

