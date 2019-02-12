import axios from "axios";
import Auth from './Auth';



export default {
    search: function (query) {
        return axios.post('/api/search', { searchContent: query })
            .then(res => { console.log(res) })
            .catch(error => { console.log(error) })
    },
    login: function(query) {
        console.log(query);
        return axios.post('/auth/login', { user: {query}})
    },
    register: function({email, password, name}) {
        console.log(newUser);
        return axios.post('/auth/signup', {email: email, password: password, name: name})
                    .then(res => {
                        Auth.authenticateUser(res.token)
                    })
    },
    getExample: function(q) {
        return axios.get("/api/igdb/Tales of Vesperia").then(res => console.log(res.data));
    }
    
}

