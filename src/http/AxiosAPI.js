import axios from "axios";


const ADMIN_AUTHENTICATED_API = axios.create({
    baseURL : 'http://localhost:4000/admin/',
    headers : {
        'Content-Type' : 'application/json',
        Accept : 'application/json',
        'Authorization' : `${localStorage.getItem('UserJWT')}`
    }
})

const ADMIN_AUTHENTICATED_FILE_API = axios.create({
    baseURL : 'http://localhost:4000/admin/',
    headers : {
        'Content-Type' : 'multipart/form-data',
        Accept : 'application/json',
        'Authorization' : `${localStorage.getItem('UserJWT')}`
    }
})


const ADMIN_API = axios.create({
    baseURL : 'http://localhost:4000/admin/',
    headers : {
        'Content-Type' : 'application/json',
        Accept : 'application/json'
    }
})



export   { ADMIN_API, ADMIN_AUTHENTICATED_FILE_API, ADMIN_AUTHENTICATED_API}