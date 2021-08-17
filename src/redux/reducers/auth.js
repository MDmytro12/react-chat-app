import { APP_SET_AUTH } from "../types"

const initialState = {
    auth : false
}

export const authReducer = function (state = initialState , action ) {
    switch(action.type){
        case APP_SET_AUTH : return{
            ...state ,
            auth : action.payload
        }
        default : return{
            ...state
        }
    }
}