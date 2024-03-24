const { TicketService } =require('../services');

const { Successresponse, Errorrespones }= require('../utils/common');

const { StatusCodes } = require('http-status-codes');

async function newTicket(req,res){
    try {
        const response = await TicketService.newTicket({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            age : req.body.age,
            gender : req.body.gender,
            contactNumber : req.body.contactNumber,
            bloodGroup : req.body.bloodGroup,
            quantity : req.body.quantity,
            TicketStatus : req.body.TicketStatus
        });
        Successresponse.data=response;
        res.status(StatusCodes.CREATED).json(Successresponse);
    } catch (error) {
        Errorrespones.error=error;
        res.status(error.statuscode).json(Errorrespones);
    }
}

async function deleteTicket(req,res){
    try {
        const response =await TicketService.deleteTicket(req.params.id);
        Successresponse.data=response;
        res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error=error;
        res.status(error.statuscode).json(Errorrespones);
    }
}

async function getAllTickets(req,res){
    try {
        const response =await TicketService.getAllTickets();
        Successresponse.data=response;
        res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error=error;
        res.status(error.statuscode).json(Errorrespones);
    }
}

async function updateTicketStatus(req,res){
    try {
        const response =await TicketService.updateStatus({
            id: req.body.id,
            TicketStatus : req.body.TicketStatus
        })
        Successresponse.data=response;
        res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error=error;
        res.status(error.statuscode).json(Errorrespones);
    }
}
module.exports={
    newTicket,
    deleteTicket,
    getAllTickets,
    updateTicketStatus
}
