const db = require("../models");

module.exports = {
  // findAll: function (req, res) {
  //   db.User.find(req.query)
  //     .sort({ name: -1 })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  findById: function (req, res) {
    db.User.find({ email: req.body.email })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    // console.log("////////////////userController.js");
    console.log(req.body);
    // console.log("////////////////userController.js");
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.log(err);
        res.status(422).json(err);
      });
    console.log("////////////////userController.js");
  },
};
