const { Model, DataTypes } = require("sequelize");

class Owner extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: { primaryKey: true, type: DataTypes.STRING },
        name: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Realty, { foreignKey: "cpf", as: "realties" });
  }
}

module.exports = Owner;
