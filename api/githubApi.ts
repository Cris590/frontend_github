import axios from 'axios';

const githubApi = axios.create({
    baseURL:'http://localhost:3000/github'
})

export default githubApi