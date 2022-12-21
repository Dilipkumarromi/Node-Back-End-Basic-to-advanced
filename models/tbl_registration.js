'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_registration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      // tbl_registration.hasMany(models.tbl_address,{foreignKey: 'registration_id',as:'address'})
      tbl_registration.hasMany(models.tbl_course,{foreignKey:'registration_id',as:'course'})
      tbl_registration.hasMany(models.tbl_address,{foreignKey:'registration_id',as:'address'})
    }
  }
  tbl_registration.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbl_registration',
  });
  return tbl_registration;
};