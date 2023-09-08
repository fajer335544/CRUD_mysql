const Sequelize = require('sequelize');
const sequelize = require('../utile/DataBase');

const User = sequelize.define('User', {
    user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

    }
    ,
    userFirstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userLastName: {
        type: Sequelize.STRING,
        allowNull: false
    },

   
  

  

});



module.exports = User;