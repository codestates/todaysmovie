const { user } = require("../../models");

module.exports = async (req, res) => {
  const userInfo = await user.findOne({
    where: { email: req.body.email, password: req.body.password },
  });

  if (!userInfo) {
    res.status(401).send({ message: "not authorized" });
  } else {
    // console.log("req.session1:  ", req.session);

    req.session.save(function (err) {
      // session saved
      if (err) {
        console.log(err);
      }
      req.session.email = userInfo.email;
      // console.log("req.session2:  ", req.session);
      res.status(200).send({ data: userInfo, message: "Login success" });
    });
  }
};
