const axios = require("axios");

const mapArrToStrings = require("../mapArrToString/mapArrToString");

module.exports = getData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const userIds = response.data.map(user => user.id);
        return mapArrToStrings(userIds);
    } catch (e) {
        throw new Error(e);
    }
}