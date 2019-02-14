import axios from "axios";

export default {
    search: function (query) {
        console.log("inside API" + query)
        return axios.post('/api/search', { searchContent: query })

    },
    addNew: function (info) {
        return axios.post('/api/addNew', { newItemInfo: info })
    },
    test: function() {
        axios.post('/api/savedList/test', {
            email:'testuser@gmail.com',
            name:'Pokemon Gen 8', 
            genre:'RPG', 
            company: 'Game Freak',
            releaseDate: '10/01/2019',
            isReleased: false,
            cover: 'somecover.jpg'  
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }


}

