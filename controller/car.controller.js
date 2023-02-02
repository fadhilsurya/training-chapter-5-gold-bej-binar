const { Car } = require('../models/index')
const { Op } = require("sequelize");

class CarController {
    async getAllCar() {
        const getCar = await Car.findAll()

        return getCar
    }

    async getById(id) {
        const getCar = await Car.findByPk(id)

        return getCar
    }

    async search(name) {
        const getCar = await Car.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        })

        return getCar
    }

    async insertData(body) {

        const create = await Car.create({
            name: body.name,
            kubikasi_mesin: body.kubikasi_mesin,
            transmisi: body.transmisi,
            pengerak_roda: body.penggerak_roda
        })

        return create
    }

    async update(id, body) {

        Car.update({
            name: body.name,
            kubikasi_mesin: body.kubikasi_mesin,
            transmisi: body.transmisi,
            pengerak_roda: body.penggerak_roda
        }, {
            where: {
                id: id
            }
        })

        const resp = await this.getById(id)


        return resp
    }

    async deleteData(id) {

        const deleteOne = delete await Car.destroy({
            where: {
                id
            }
        })

        return deleteOne
    }
}

module.exports = CarController