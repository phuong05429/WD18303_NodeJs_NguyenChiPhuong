// ket noi CSDL
const sequelize = require("./Database.js");

// su dung doi tuong DataTypes cua sequelize
const { Sequelize, DataTypes } = require('sequelize');

// User chu to la ten model, chu user nho la ten bang CSDL
const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
     
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false, // cho phep them gio cap nhat tao moi
  }
);

module .exports = User;