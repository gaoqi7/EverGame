require("dotenv").config();
const axios = require('axios');
// const db = require('../models');
const keys = require('../keys')

module.exports = {


    search: (req, res) => {
        const { query: params } = req;
        axios.get("https://api-v3.igdb.com/games", {
            headers: {
            "user-key": keys.igdb.api_key,
            Accept: "application/json"
            },
            params: {
                search: "civilization",
                fields: "id, name, release_dates"
            }
        })
        .then(response => {
            res.json(response.data);
        })
        .catch(e => {
            console.log("error", e);
        });
       
    }
}