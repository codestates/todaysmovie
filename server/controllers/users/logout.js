module.exports = (req, res) => {

  req.session.destroy();
  res.json({ message: 'successfully signed out' });

};
