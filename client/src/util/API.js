import axios from "axios";

export default {
    search: function (query) {
        return axios.post('/api/search', { searchContent: query })
            .then(res => { console.log(res) })
            .catch(error => { console.log(error) })
    },
    getExample: function(q) {
        return axios.get("/api/igdb/Tales of Vesperia").then(res => console.log(res.data));
    }
    
}

