import axios from 'axios';

const githubApi = axios.create({
    baseURL:'http://localhost:4000/github'
})

export default githubApi