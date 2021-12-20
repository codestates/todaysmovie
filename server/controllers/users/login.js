const { user } = require("../../models");

module.exports = async (req, res) => {
  const userInfo = await user.findOne({
    where: { userId: req.body.userId, password: req.body.password },
  });

  if (!userInfo) {
    res.status(401).send({ message: "wrong login request" });
  } else {
    req.session.save(function () {
      req.session.userId = userInfo.userId;
      res.json({ data: { userId: userInfo.userId }, message: "ok" });
    });
  }
};
