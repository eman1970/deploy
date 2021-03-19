import Axios from 'axios'

const DEVELOPMENT = 'http://localhost:3002'
const PRODUCTION = 'http://localhost:3002'

const BackendAPI = Axios.create({
    baseURL: PRODUCTION,
    headers: {'Content-type': 'application/json'}
})

export default BackendAPI