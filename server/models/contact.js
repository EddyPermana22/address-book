'use strict'
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Contact extends Model { }
  Contact.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    }
  }, { sequelize, modelName: 'Contact' })
  Contact.associate = function (models) {
    // associations can be defined here
  }
  return Contact
}