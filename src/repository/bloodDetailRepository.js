const CrudRepository = require('./CRUD-repository');

const { BloodDetails } = require('../models');

const { Sequelize } = require("sequelize");

class BloodDetailRepository extends CrudRepository {
    constructor() {
        super(BloodDetails);
    }

    async getBloodDetailByBloodType(bloodType) {
        const respones = await BloodDetails.findAll({
            where: {
                bloodType: bloodType
            }
        })
        if (!respones) {
            throw new AppError('Invalid Input');
        }
        return respones;
    }

    async getBloodDetailByBloodGroup(bloodGroup) {
        const respones = await BloodDetails.findAll({
            attributes: {
                include: [
                    [Sequelize.fn('COUNT', Sequelize.col('id')), 'countOfAvaliablebloodbags']
                ]
            },
            where: {
                bloodGroup: bloodGroup
            }, 
        });
        if (!respones) {
            throw new AppError('Invalid Input');
        }
        return respones;
    }
}

module.exports = BloodDetailRepository;