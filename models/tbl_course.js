'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_course extends Model {
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
  tbl_course.init({
    registration_id: DataTypes.INTEGER,
    course_name: DataTypes.STRING,
    course_fee: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbl_course',
  });
  return tbl_course;
};