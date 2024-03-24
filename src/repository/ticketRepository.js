const CrudRepository =require('./CRUD-repository');

const { Ticket } = require('../models');

class TicketRepository extends CrudRepository{
    constructor(){
        super(Ticket);
    }
}

module.exports =TicketRepository;