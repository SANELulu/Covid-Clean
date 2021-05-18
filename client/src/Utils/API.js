import axios from "axios";

export default {
    getMap: function() {
        return axios.get("/api/map/allData");
    }
}