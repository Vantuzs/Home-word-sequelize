'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Phone.init({
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    mark: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    realizeDate: {
      type: DataTypes.DATE,
      field: 'realize_date',
      validate: {
        isDate: true,
        isBefore: new Date().toDateString()
      }
    },
    ramSize: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'ram_size',
      validate: {
        notNull: true
      }
    },
    processor: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    screenDiagonal: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'screen_diagonal',
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    nfs: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Phone',
    tableName: 'phones',
    underscored: true,
    timestamps: true
  });
  return Phone;
};