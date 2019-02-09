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
            .then(res => console.log(res))
            .catch(err => console.log(err))
    },
    register: function(email, pass) {
        console.log(email, pass);
        return axios.post('/api/users', { user: {email: email, password: pass}})
    }
    
}

