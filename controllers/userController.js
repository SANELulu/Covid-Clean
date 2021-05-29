const db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = {
  // findAll: function (req, res) {
  //   db.User.find(req.query)
  //     .sort({ name: -1 })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  findUser: function (req, res) {
    db.User.findOne({ email: req.body.email })
      .then((dbModel) => {
        if (!dbModel) return res.status(401).send("Incorrect Username!");
        const doesPasswordMatch = bcrypt.compareSync(
          req.body.password,
          dbModel.password
        ); //it wii give you a boolean, so the value of doesPasswordMatch will be a boolean

        if (!doesPasswordMatch)
          return res.status(401).send("Incorrect Password!");

        res.json(dbModel);
      })
      .catch((err) => {
        console.log(err);

        res.status(422).json(err);
      });
  },
  create: function (req, res) {
    // console.log("////////////////userController.js");
    console.log(req.body);
    // console.log("////////////////userController.js");
    const newUser = req.body;
    (newUser.password = bcrypt.hashSync(
      req.body.password,
      bcrypt.genSaltSync()
    )),
      db.User.create(newUser)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => {
          console.log(err);
          res.status(422).json(err);
        });
    console.log("////////////////userController.js");
  },
};
