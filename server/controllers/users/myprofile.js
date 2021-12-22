const { user } = require("../../models");

module.exports = async (req, res) => {
  console.log(req.session);
  if (!req.session.email) {
    res.status(404).send({ message: "invalid user" });
  } else {
    const result = await user
      .findOne({
        where: { email: req.session.email },
      })
      .catch((err) => res.json(err));

    // console.log(result);
    res.status(200).json({ data: result, message: "ok" });
  }
};
