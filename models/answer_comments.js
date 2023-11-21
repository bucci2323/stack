'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class answer_comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  answer_comments.init({
    answer_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    comments: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'answer_comments',
  });
  return answer_comments;
};