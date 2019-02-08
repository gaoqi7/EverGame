require("dotenv").config();
const axios = require('axios');
// const db = require('../models');
const keys = require('../keys')

module.exports = {

    // API.getGame(this.state....) <- client/src/pages
    // getGame: function(param1, param2....) 
    // return axios.get("/api/igdb", { params: { param1 }, { param2 } }); <-- client/src/utils
    search: (req, res) => {
        axios.get("https://api-v3.igdb.com/games", {
            headers: {
            "user-key": keys.igdb.api_key,
            Accept: "application/json"
            },
            params: {
                search: req.params.name,
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

// Genre Route

// Image Route


// Optional Route: