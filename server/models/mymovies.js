"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class myMovies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  myMovies.init(
    {
      movieId: DataTypes.INTEGER,
      movieName: DataTypes.STRING,
      moviePoster: DataTypes.STRING,
      movieGenre: DataTypes.INTEGER,
      movieStars: DataTypes.INTEGER,
      movieRunningtime: DataTypes.INTEGER,
      movieDesc: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "myMovies",
    }
  );
  return myMovies;
};
