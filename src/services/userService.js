import http from './httpServer'

import config from './config.json'

export const registerUser = user =>{
    return http.post(
        `${config.toplearnapi}/api/register`,
        JSON.stringify(user)
    )
}

export const userLogin = user =>{
    return http.post(
        `${config.toplearnapi}/api/login`,
        JSON.stringify(user)
    )
}