import { APP_SET_AUTH } from "../types"

export function setAuth(payload){
    return({
        type : APP_SET_AUTH,
        payload
    })
}