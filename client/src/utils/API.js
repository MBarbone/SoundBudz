import axios from "axios";
const TICKET_MASTER = process.env.REACT_APP_TICKETMASTER_API_KEY;

export default {
  // retrieves a list of events using Ticketmaster Discovery API
  getEvents: function() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    return axios.get(
      proxyurl +
        "https://app.ticketmaster.com/discovery/v2/events/?keyword=shania+twain&apikey=" +
        TICKET_MASTER
    );
  },

  getEventDetails: function() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    return axios.get(
      proxyurl +
        `https://app.ticketmaster.com/discovery/v2/events/?keyword=ariana+grande&apikey=
        ${TICKET_MASTER}`
    );
  },
  createGroup: function(groupData) {
    return axios.post("/api/groups/", groupData);
  },

  getAllGroups: function(id) {
    return axios.get(`/api/users/${id}/groups`);
  },

  getOneGroup: function(id) {
    return axios.get("/api/groups/" + id);
  },

  updateGroup: function(id) {
    return axios.put("/api/groups/" + id);
  }
};
