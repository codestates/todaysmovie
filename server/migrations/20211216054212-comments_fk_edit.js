"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // field 추가
    // await queryInterface.addColumn(
    //   "comments",
    //   "writerId",
    //   Sequelize.STRING(50)
    // );
    // foreign key 연결(comments.writerId - users.id)
    await queryInterface.addConstraint("comments", {
      fields: ["writerId"],
      type: "foreign key",
      name: "comments.writerId - users.id",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint(
      "comments",
      "comments.writerId - users.id"
    );
    // await queryInterface.removeColumn("comments", "writerId");
  },
};

// 마이그레이션 실행하는 명령어
// npx sequelize-cli db:migrate

// 마이그레이션 취소하는 명령어
// npx sequelize-cli db:migrate:undo:all
