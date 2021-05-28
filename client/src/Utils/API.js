import axios from "axios";

export default {
  getMap: function () {
    return axios.get("/api/map/allData");
  },
  getMapID: function (id) {
    return axios.get("/api/map/" + id);
  },
  postUser: function (postData) {
    // console.log("//////////////API.js");
    // console.log(postData);
    // console.log("//////////////API.js");
    return axios.post("/api/user/signup", postData);
  },
  getUser: function (userData) {
    return axios.post("/api/user/signin", userData);
  },
  postReview: function (reviewData) {
    return axios.post("/api/map/postreview", reviewData);
  },
};
