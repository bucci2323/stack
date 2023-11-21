const { DataTypes, sequelize } = require("../Database/connection");

const Question = sequelize.define("questions", {
  user_id: {
    type: DataTypes.INTEGER,
    // autoIncrement: true,
    // primaryKey: true,
  },
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    required: true,
  },
  question: {
    type: DataTypes.STRING,
    required: true,
    trim: true,
  },
  rating: {
    type: DataTypes.STRING,
    unique: true,
    required: true,
    trim: true,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

module.exports = Question;