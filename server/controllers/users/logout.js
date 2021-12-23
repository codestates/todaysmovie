module.exports = (req, res) => {
  console.log("finderror");
  if (!req.session.email) {
    res.status(400).send({ data: null, message: "Not Logged in" });
  } else {
    req.session.destroy();
    res.json({ data: null, message: "Logout Success!" });
  }
};
