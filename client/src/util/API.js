import axios from "axios";



export default {
    search: function (query) {
        return axios.post('/api/search', { searchContent: query })
            .then(res => { console.log(res) })
            .catch(error => { console.log(error) })
    },
    login: function(query) {
        console.log(query);
        return axios.post('/api/users/login', { user: {query}})
    },
    register: function(email, pass) {
        console.log({email: email, password: pass});
        return axios.post('/api/users', { user: {email: email, password: pass}})
                    .then(res => console.log(res))
    },
    getExample: function(q) {
        return axios.get("/api/igdb/Tales of Vesperia").then(res => console.log(res.data));
    }
    
}

