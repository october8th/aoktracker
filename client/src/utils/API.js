import axios from "axios";

export default {
    getActs: function() {
        return axios.get("/api/aoks");
    },

    saveNewAct: function(aokData) {
        return axios.post("/api/aoks", aokData);
    }
};