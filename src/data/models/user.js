const { DataTypes } = require('sequelize');
const db = require("../database")

module.exports = db.define('userdata', {
  name: {
    type: DataTypes.STRING
  },
  disaster_type: {
    type: DataTypes.STRING
  },
  contact: {
    type: DataTypes.STRING
  },
})