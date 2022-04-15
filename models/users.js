'use strict';
const {Posts} = require('../models');
const {
  Model
} = require('sequelize');


// import {sequelize, DataTypes} from 'sequelize'


module.exports = (sequelize, DataTypes) => {
   class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      //User.hasMany(models.Post)
      
    }
  }
  User.init({

    name:{
        type: DataTypes.STRING,
        allowNull:false,
       
        // validate:{
        //     notNull:{msg:"User must have a name"},   
        // }
      
    }, 


    surname:{
        type: DataTypes.STRING,
    //     allowNull:false ,
    //     validate:{
    //         notNull:{msg:"User must have a surname"},
    //         notEmpty:{msg:"Surname must not be empty"}
    //     }
     }, 

    email: {
        type:DataTypes.STRING,
        unique:true,
        // allowNull:false ,
        // validate:{
        //   notNull:{msg:"User must have an email"},
        //   notEmpty:{msg:"Email must not be empty"},
        //   isEmail:{msg:"Must be a valid email address"}
        // }
    },

    password:{
      type:DataTypes.STRING,
    },

    photo:{
      type:DataTypes.STRING,
    }

  }, {
    sequelize,
    tableName:"users",
    modelName: 'User',
  });
  //User.hasMany(Posts, { onDelete: 'CASCADE', hooks: true })
  return User;
};