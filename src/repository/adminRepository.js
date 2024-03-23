const CrudRepository =require('./CRUD-repository');

const { Admin } =require('../models');

const {AppError} = require('../utils');

class AdminRepository extends CrudRepository {
    constructor(){
       super(Admin);
    }

    async getAdminbyUserName(userName){
        const respones = await Admin.findOne({
            where : {
                userName : userName 
            }
        })
        if(!respones) {
            throw new AppError('Invalid UserName');
        }
        return respones;
    }
}

module.exports=AdminRepository;
