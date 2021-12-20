const { user } = require("../../models");

module.exports = async (req, res) => {
  if (!req.session.userId) {
    res.status(404).send({ message: "invalid user" });
  } else {
    const result = await user
      .findOne({
        where: { userId: req.session.userId },
      })
      .catch((err) => res.json(err));

    res.status(200).json({ data: result, message: "ok" });
  }
};
