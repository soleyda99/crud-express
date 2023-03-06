const { models } = require('../libs/sequelize');

class UsersService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }
  async find() {
    const response = await models.User.findAll();
    return response;
  }
  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw new Error('Id no encontrado');
    }
    return user;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const response = await user.update(changes);
    return response;
  }
}

module.exports = UsersService;
