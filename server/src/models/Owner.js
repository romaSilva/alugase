const { Model, DataTypes } = require("sequelize");

class Owner extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: { primaryKey: true, type: DataTypes.STRING },
        name: DataTypes.STRING,
        phone: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Owner;
