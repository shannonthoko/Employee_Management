import axios from "axios";

const BASEURL = "https://randomuser.me/api/";

const fifty = "/?results=50"
const women = "&&gender=female"
const men = "&&gender=male"

export default {
  fetch: function() {
    return axios.get(BASEURL + fifty);
  },

  fetchWomen: function () {

    return axios.get(BASEURL + fifty + women);
  },

  fetchMen: function () {

    return axios.get(BASEURL + fifty + men);
  }
};
