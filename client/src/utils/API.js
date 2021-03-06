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
    updateDaok: function(someData)
    {
        return axios.post("/api/daok",someData);
    },
    getDaok: function(someData)
    {
        return axios.get("/api/daok",someData)
    },
    checkDaok: function(someData)
    {
        return axios.patch("/api/daok",someData)
    },
    addNote: function(aokData) {
        return axios.post("/api/notes/" + aokData.noteID, aokData);
    },
    getNotes: function(aokData) {
        return axios.get("/api/notes", aokData);
    }
};