const { user } = require('../../models');

module.exports = (req, res) => {
  const {email, password, username, mobile} = req.body;
  if (!email || !password || !username || !mobile) {
    res.status(422).json({message: 'insufficient parameters supplied'})
  }
  user.findOrCreate({
    where: {email},
    defaults: {
      username,
      password,
      mobile
    }
  })
  .then(([data, created]) => {
    if (!created) {
      res.status(409).json({message: 'email exists'})
    } else {
      req.session.save(function () {
        req.session.userId = data.dataValues.userId;
        res.status(201).json({ data: userInfo, message: 'signup is success!' });
      });
    }
  })
};
