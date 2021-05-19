const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.user
      .find(req.query)
      .sort({ name: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.user
      .findOne({ id: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
