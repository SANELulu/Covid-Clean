const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Map.find(req.query)
      .sort({ name: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Map.findOne({ id: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  postReview: function (req, res) {
    db.Map.update(
      { id: req.body.id },
      { $push: { reviews: req.body.postReview } }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => {
        console.log(err);
        res.status(422).json(err);
      });
  },
};
