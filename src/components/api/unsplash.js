import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID AQcpJHIkGYSQK6FXkhnq6_OLceTHudd_ZBHZLe0Dlog'
    }
})
