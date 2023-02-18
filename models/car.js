'use strict';
const {
  Model, NOW
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kubikasi_mesin: {
      type: DataTypes.INTEGER
    },
    transmisi: {
      type: DataTypes.STRING
    },
    pengerak_roda: {
      type: DataTypes.STRING
    },
    // is_active: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false,
    //   allowNull: false
    // },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    deletedAt: {
      type: DataTypes.DATE,
    }

  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};