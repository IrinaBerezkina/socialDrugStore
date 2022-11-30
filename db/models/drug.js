const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Drug extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Bascket, {
        foreignKey: 'drug_id',
      });
    }
  }
  Drug.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    img: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Drug',
  });
  return Drug;
};
