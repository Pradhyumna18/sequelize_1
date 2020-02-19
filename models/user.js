'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phn: DataTypes.INTEGER,
    rollno: DataTypes.INTEGER,
    softDelete: DataTypes.STRING,
    projectId: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    user.belongsTo(models.Role,{foreignKey: 'rollno'});
  models.Role.hasOne(user,{foreignKey: 'rollno'});
  user.belongsTo(models.Project,{foreignKey: 'projectId'});
  models.Project.hasMany(user,{foreignKey: 'rollno'});
  
  };
  return user;
};
//req.body
//associations
//hasmany
//scopes
//hooks
//transaction
//operators
//