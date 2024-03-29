const express =require('express');

const router =express.Router();

const userRouter= require('./user');

const adminRouter = require('./admin');

const donarRouter = require('./donar');

const ticketRouter= require('./ticket');

const BloodDetailRouter = require('./bloodDetails');

router.use('/user',userRouter);

router.use('/admin',adminRouter);

router.use('/donar',donarRouter);

router.use('/ticket',ticketRouter);

router.use('/bloodDetails',BloodDetailRouter);

module.exports =router;