const db = require("../models");

module.exports = {
  // findAll: function (req, res) {
  //   db.User.find(req.query)
  //     .sort({ name: -1 })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // findById: function (req, res) {
  //   db.User.findOne({ id: req.params.id })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  create: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
