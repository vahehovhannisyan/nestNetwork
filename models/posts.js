'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Post.belongsTo(models.User, { foreignKey: { name: 'userId' }, onDelete: 'CASCADE', hooks:'true'})
      
      }
  }
  Post.init({
    userId: DataTypes.INTEGER,
    post: DataTypes.STRING
  }, {
    sequelize,
    tableName:'posts',
    modelName: 'Post',
  });
  return Post;
};