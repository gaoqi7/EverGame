require("dotenv").config();
const axios = require('axios');
// const db = require('../models');
const keys = require('../keys')

module.exports = {

    // API.getGame(this.state....) <- client/src/pages
    // return axios.get("/api/igdb", { params: { param1 }, { param2 } }); <-- client/src/utils
    search: (req, res) => {

        axios.get("https://api-v3.igdb.com/games", {
            headers: {
                "user-key": "dd3daba0559c0275f3cdcbfbb826ef0e",
                Accept: "application/json"
            },
            params: {

                search: req,
                fields: "name,genres.name,involved_companies.company,involved_companies.developer,involved_companies.publisher,involved_companies.company.name,cover.image_id,release_dates.date,release_dates.human,summary",
                "filter[cover.image_id][exists]": "null",
                "filter[involved_companies][exists]": "null",
                "filter[release_dates][exists]": "null",
                "filter[genres][exists]": "null",
                limit: 50

            }


        })
            .then((response) => {
                console.log(response.data);
                console.log("********************************************************")
                res.json(response.data)
            })
            .catch(e => {
                console.log("error", e);
            });

    }
}

// Genre Route

// Image Route


// Optional Route: