import axios from "axios";

export default {
    getActs: function() {
        return axios.get("/api/aoks");
    },

    saveNewAct: function(aokData) {
    	axios.post("/api/fusiontable",aokData);
        return axios.post("/api/new", aokData);
    },

    getLoc: function() {
    	return axios.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAWFy0E2ch52woUGcHiQ27eq5tzZuhI4JE", {"considerIp": "true"})
    }
};