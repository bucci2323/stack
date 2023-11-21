const { DataTypes, sequelize } = require("../Database/connection");

const answerComment = sequelize.define("answer_comments", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    // autoIncrement: true,
    // primaryKey: true,
  },
  answer_id: {
    type: DataTypes.INTEGER,
  },
  comments: {
    type: DataTypes.STRING,
    unique: true,
    required: true,
    trim: true,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

module.exports = answerComment;