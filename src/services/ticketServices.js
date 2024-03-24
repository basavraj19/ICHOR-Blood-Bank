const { StatusCodes } = require('http-status-codes');
const { TicketRepository } = require('../repository');

const { AppError } = require('../utils');

const Ticket = new TicketRepository();

async function newTicket(data) {
    try {
        const response = await Ticket.create(data);
        return response;
    } catch (error) {
        throw new AppError('Something went wrong while generating new Ticket', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteTicket(id) {
    try {
        const response = await Ticket.delete(id);
        return response;
    } catch (error) {
        throw new AppError('Something went wrong while deleting Ticket', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllTickets() {
    try {
        const tickets = await Ticket.getAll();
        return tickets;
    } catch (error) {
        throw new AppError('Something went wrong while fetching data', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateStatus(data) {
    try {
        const response = await Ticket.update(data.id, data);
        return response;
    } catch (error) {
        throw new AppError('Something went wrong while updating status', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    newTicket,
    deleteTicket,
    getAllTickets,
    updateStatus
}