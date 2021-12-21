"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  movie.init(
    {
      movieName: DataTypes.STRING,
      moviePoster: DataTypes.STRING,
      movieGenre: DataTypes.STRING,
      movieRating: DataTypes.INTEGER,
      movieRunningtime: DataTypes.INTEGER,
      movieDesc: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "movie",
    }
  );
  return movie;
};
