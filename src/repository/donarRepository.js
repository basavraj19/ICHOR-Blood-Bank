const CrudRepository =require('./CRUD-repository');

const { Donar } =require('../models');
const { AppError } = require('../utils');

class DonarRepository extends CrudRepository{
    constructor(){
        super(Donar);
    }
    async getDonarbyUserName(userName){
        const respones = await Donar.findOne({
            where : {
                userName : userName 
            }
        })
        if(!respones) {
            throw new AppError('Invalid UserName');
        }
        return respones;
    }

    async getBloodDetailByBloodGroup(bloodGroup){

    }
}

module.exports = DonarRepository;