import Axios from 'axios'

const DEVELOPMENT = 'http://localhost:3002'
const PRODUCTION = 'https://tommytestapp-2021.herokuapp.com/'

const BackendAPI = Axios.create({
    baseURL: PRODUCTION,
    headers: {'Content-type': 'application/json'}
})

export default BackendAPI