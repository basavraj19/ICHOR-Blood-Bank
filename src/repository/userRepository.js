const CrudRepository =require('./CRUD-repository');

const {User} =require('../models');
const { AppError } = require('../utils');

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }
    async getUserbyUserName(userName){
        const respones = await User.findOne({
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

module.exports = UserRepository;