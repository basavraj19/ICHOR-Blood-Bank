const express =require('express');

const router =express.Router();

const userRouter= require('./user');

const adminRouter = require('./admin');

const donarRouter = require('./donar');

router.use('/user',userRouter);

router.use('/admin',adminRouter);

router.use('/donar',donarRouter);

module.exports =router;