const express = require('express');

const router = express.Router();

const { TicketController } = require('../../controllers');

router.post('/',TicketController.newTicket);

router.get('/',TicketController.getAllTickets);

router.delete('/:id',TicketController.deleteTicket);

router.patch('/',TicketController.updateTicketStatus);

module.exports=router;