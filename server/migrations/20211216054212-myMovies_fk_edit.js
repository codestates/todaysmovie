"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // field 추가
    // await queryInterface.addColumn("comments", "writerId", Sequelize.INTEGER);
    // foreign key 연결(myMovies.movieGenre - genre.id)
    await queryInterface.addConstraint("myMovies", {
      fields: ["movieGenre"],
      type: "foreign key",
      name: "myMovies.movieGenre - genre.id",
      references: {
        table: "genre",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint(
      "myMovies",
      "myMovies.movieGenre - genre.id"
    );
    // await queryInterface.removeColumn("comments", "userId");
  },
};
