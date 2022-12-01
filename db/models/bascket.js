const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Bascket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'cascade',
      });
      this.belongsTo(models.Drug, {
        foreignKey: 'drug_id',
        onDelete: 'cascade',
      });
    }
  }
  Bascket.init({
    user_id: DataTypes.INTEGER,
    drug_id: DataTypes.INTEGER,
    is_free: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Bascket',
  });
  return Bascket;
};
