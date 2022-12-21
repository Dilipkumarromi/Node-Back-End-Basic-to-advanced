'use strict';
const {
  Model
} = require('sequelize');
const db=require('../models/index')
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.tbl_registration,{foreignKey:'id',as:'course'})
     
    }
  }
  address.init({
    city: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    registration_id: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'tbl_address',
  });
  return address;
};