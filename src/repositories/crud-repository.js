const StatusCode = require('http-status-codes');
const Apperror = require('../utils/error/App-error');
class crudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const response = await this.model.create(data);
        return response;
    }

    async destroy(data) {
        const response = await this.model.destroy({

            where: {
                id: data
            }
        });
        if (!response) {
            throw new Apperror("not able to find resource", StatusCode.NOT_FOUND);
        }
        return response;
    }


    async get(data) {
        const response = await this.model.findByPk(data);
        if (!response) {
            throw new Apperror("not able to find resource", StatusCode.NOT_FOUND);
        }
        return response;
    }

    async getAll() {
        const response = await this.model.findAll();
        return response;
    }

    async update(id, data) {
        const response = await this.model.update(data, {

            where: {
                id: id
            }
        });

        if (!response) {
            throw new Apperror("not able to find resource", StatusCode.NOT_FOUND);
        }
        return response;
    }

}
module.exports = crudRepository