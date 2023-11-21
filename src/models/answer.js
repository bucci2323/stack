const { DataTypes, sequelize } = require("../Database/connection");

const Answers = sequelize.define("answers", {
  user_id: {
    type: DataTypes.INTEGER,
    // autoIncrement: true,
    primaryKey: true,
  },
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  question_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },

  answer: {
    type: DataTypes.STRING,
    required: true,
    trim: true,
  },
  votes: {
    type: DataTypes.STRING,
    unique: true,
    required: true,
    trim: true,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

module.exports = Answers;
