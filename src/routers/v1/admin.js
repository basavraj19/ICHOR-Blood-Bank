const express = require('express');

const router = express.Router();

const { AdminController } =require('../../controllers');

router.post('/',AdminController.NewAdmin);

router.delete('/',AdminController.deleteAdmin);

router.get('/',AdminController.getAdmin);

router.patch('/',AdminController.updateAdminData);

module.exports=router;