const { user } = require("../../models");

module.exports = (req, res) => {
  const { email, password, username, mobile } = req.body;
  if (!email || !password || !username || !mobile) {
    res.status(422).json({ message: "Insufficient parameters supplied" });
  }
  user
    .findOrCreate({
      where: { email },
      defaults: {
        username,
        password,
        mobile,
      },
    })
    .then(([data, created]) => {
      if (!created) {
        res.status(409).json({ message: "Email exists" });
      } else {
        console.log(data.dataValues);
        res.status(201).json({ message: "Signup Success!" });
      }
    });
};
