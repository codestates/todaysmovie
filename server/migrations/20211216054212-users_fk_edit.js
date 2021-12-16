"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // field 추가
    // await queryInterface.addColumn("comments", "writerId", Sequelize.INTEGER);
    // foreign key 연결(users.myMoviesId - myMovies.id)
    await queryInterface.addConstraint("users", {
      fields: ["myMoviesId"],
      type: "foreign key",
      name: "users.myMoviesId - myMovies.id",
      references: {
        table: "myMovies",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint(
      "users",
      "users.myMoviesId - myMovies.id"
    );
    // await queryInterface.removeColumn("comments", "userId");
  },
};
