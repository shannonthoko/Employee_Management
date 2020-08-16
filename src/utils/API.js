import axios from "axios";

const BASEURL = "https://randomuser.me/api/";

const women = "/?gender=female"

//const fifty = "/?results=50"
const men = "/?gender=male"

export default {
  fetch: function() {
    return axios.get(BASEURL);
  },

  fetchWomen: function () {

    return axios.get(BASEURL + women);
  },

  fetchMen: function () {

    return axios.get(BASEURL + men);
  }
};
