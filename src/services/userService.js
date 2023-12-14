const { UserRepository } =require('../repository');

const { StatusCodes } =require('http-status-codes');

const { AppError } =require('../utils');

const User = new UserRepository();

async function createUser(data){
    try {
        const user = await User.create(data);
        return user;
    } catch (error) {
        throw new AppError('Somthing went wrong while creating user.',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function UserLogin(data){
    try {
        const user = await User.getUserbyUserName(data.userName);
        if(user.password!=data.password){
            throw new AppError('Invalid Password.',StatusCodes.BAD_REQUEST);
        }
        return user;
    } catch (error) {
        throw new AppError('Invalid UserName or Password.',StatusCodes.BAD_REQUEST);
    }
}

async function deleteUser(query){
    try {
        const user = await User.getUserbyUserName(query.userName);
        if(query.password!=user.password){
            throw new AppError('Invalid Password.',StatusCodes.BAD_REQUEST);
        }
        const response =await User.delete(user.id);
        return response;
    } catch (error) {
        throw new AppError('Invalid UserName or Password.',StatusCodes.BAD_REQUEST);
    }
}

async function updateUserData(data){
    try {
        const user=await User.getUserbyUserName(data.userName);
        const response =await User.update(user.id,data);
        return response;
    } catch (error) {
        throw new AppError('Invalid UserName.',StatusCodes.BAD_REQUEST);
    }
}

module.exports ={
    createUser,
    UserLogin,
    deleteUser,
    updateUserData
}