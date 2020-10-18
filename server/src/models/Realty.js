const { Model, DataTypes } = require("sequelize");

class Realty extends Model {
  static init(sequelize) {
    super.init(
      {
        cep: DataTypes.STRING,
        phone: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.INTEGER,
        value: DataTypes.DECIMAL,
        details: DataTypes.STRING,
        image: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Owner, { foreignKey: "cpf", as: "owner" });
  }
}

module.exports = Realty;
