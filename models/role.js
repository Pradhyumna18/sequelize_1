'use strict';
//const user=require('./user')
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    rolename: DataTypes.STRING,
    id:{ type:DataTypes.INTEGER,
     primaryKey: true,
     }
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
   
  };
  return Role;
};