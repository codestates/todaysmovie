"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("movies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      movieName: {
        type: Sequelize.STRING(50),
      },
      moviePoster: {
        type: Sequelize.STRING,
      },
      movieGenre: {
        type: Sequelize.STRING(50),
      },
      movieRating: {
        type: Sequelize.INTEGER,
      },
      movieRunningtime: {
        type: Sequelize.INTEGER,
      },
      movieDesc: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("movies");
  },
};
