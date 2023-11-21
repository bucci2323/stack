const { DataTypes, sequelize } = require("../Database/connection");

const questionComment = sequelize.define("question_comments", {
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
  question_id: {
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

module.exports = questionComment;