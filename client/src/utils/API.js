import axios from "axios";

export default {
    getActs: function() {
        return axios.get("/api/new");
    },

    saveNewAct: function(aokData) {
    	axios.post("/api/fusiontable",aokData);
        return axios.post("/api/new", aokData);
    },

    getLoc: function() {
    	return axios.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAWFy0E2ch52woUGcHiQ27eq5tzZuhI4JE", {"considerIp": "true"})
    },
    updateDaok: function()
    {
        return axios.post("/api/daok");
    },
    getDaok: function()
    {
        return axios.get("/api/daok")
    }
};