import axios from "axios";



export default {
    search: function (query) {
        return axios.post('/api/search', { searchContent: query })
            .then(res => { console.log(res) })
            .catch(error => { console.log(error) })
    }
}

