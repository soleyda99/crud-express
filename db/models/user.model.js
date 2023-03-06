const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'user';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  apellido: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  edad: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  fechaNacimiento: {
    allowNull: false,
    field: 'fecha_nacimiento',
    type: DataTypes.STRING,
  },
  fechaInscripcion: {
    allowNull: false,
    field: 'fecha_inscripcion',
    type: DataTypes.STRING,
  },
  costo: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

class User extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    };
  }
}
module.exports = { USER_TABLE, UserSchema, User };
