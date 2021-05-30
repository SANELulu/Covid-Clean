const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
//week 20, activities, 22 miniproject
// mongoose.connect('mongodb:localhost:27017/covid')
mongoose.connect("mongodb://localhost/covid");

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, () => {
//   console.log("connected to db");
// });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
