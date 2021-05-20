import axios from "axios";

export default {
  getMap: function () {
    return axios.get("/api/map/allData");
  },
  getMapID: function (id) {
    return axios.get("/api/map/" + id);
  },
  postUser: function () {
    return axios.get("/api/user");
  },
  getUser: function (id) {
    return axios.post("/api/user" + id);
  },
};
