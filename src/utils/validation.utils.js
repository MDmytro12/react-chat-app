export default function validator(formData){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    let error = {} 

    if(formData.login.length === 0 || !regex.test(formData.login) ){
        error.login = true
    }

    if(formData.password.length < 6){
        error.password = true
    }

    if(formData.hasOwnProperty('name')){
        if(formData.name.length === 0 ){
            error.name = true
        }
    }

    return error
}