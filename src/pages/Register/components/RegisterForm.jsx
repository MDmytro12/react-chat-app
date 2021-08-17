import React , {useState , useEffect} from 'react'
import PropTypes from 'prop-types'

import {RiUserAddLine} from 'react-icons/ri'

import validator from '../../../utils/validation.utils'
import classNames from 'classnames'
import { useHistory } from 'react-router'
import Loader from 'react-loader-spinner'

const RegisterForm = ({loader , setLoader , register , setContent}) => {

    const history = useHistory()
    
    const [errors , setErrors] = useState({});
    const [formData ,setFormData ] = useState({
        login : '',
        password: '',
        name : ''
    });
    
    
    const onSubmitHandler = async(e) => {
        e.preventDefault()
        setErrors({})

        const error = validator(formData)

        if(error.hasOwnProperty('name') || error.hasOwnProperty('login') || error.hasOwnProperty('password')){
            setErrors(error)
            return
        }

        try{
            setLoader(true)
            const response = await fetch('http://localhost:4000/auth/reg' , { method : "POST" , headers : {"Content-Type" : "application/json"} , body : JSON.stringify({
                email : formData.login ,
                password : formData.password ,
                name : formData.name
                }) })
            if(response.status === 200){
                setContent('success')
            }
            if(response.status === 400){
                setContent('failed')
            }
            setLoader(false)
        }catch(e){
            console.log(e)
            setLoader(false)
            setErrors({
                ...errors ,
                server: true
            })
        }
    }

    const onChangeHandlerLogin = (e) => {
        setFormData({
            ...formData ,
            login : e.target.value
        })
    }

    const onChangeHandlerPassword = (e) => {
        setFormData({
            ...formData ,
            password : e.target.value
        })
    }

    const onChangeHandlerName = (e) => {
        setFormData({
            ...formData ,
            name : e.target.value
        })
    }

    const onFocusHandler = () => {
        setErrors({})
    }

    return(
        <>
            <div className="register_form">
                <form onSubmit={onSubmitHandler}>
                    <input value={formData.login} onChange={onChangeHandlerLogin} onFocus={onFocusHandler} typd="text" placeholder='create your login . . .' className="form_input" className={classNames("form_input" , { "error" : errors.login })}/>
                    <input value={formData.name} onChange={onChangeHandlerName} onFocus={onFocusHandler} type="text" placeholder='name . . .' className="form_input" className={classNames("form_input" , { "error" : errors.name })} />
                    <input value={formData.password} onChange={onChangeHandlerPassword} onFocus={onFocusHandler} type="password" placeholder="enter your password . . ." className="form_input" className={classNames("form_input" , { "error" : errors.password })}/>
                    <button type='submit' style={{marginBottom: 20}}>
                        Sign up  
                        <RiUserAddLine className='icons'/>
                    </button>
                    {
                        loader && 
                        <Loader 
                            type="Oval"
                            color="#00BFFF"
                            height={30}
                            width={30}
                        />
                    }
                    
                </form>
                {
                    errors.server &&
                    <div className="server_error">Server error!Check your connection to the Internet!</div>
                }
                
            </div>
        </>
    )
}

RegisterForm.propTypes = {
    loader : PropTypes.bool ,
    setLoader : PropTypes.func , 
    register: PropTypes.func ,
    setContent : PropTypes.func
}

export default RegisterForm;