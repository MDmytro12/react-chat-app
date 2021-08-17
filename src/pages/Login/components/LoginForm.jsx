import classNames from 'classnames';
import React, {useState , useEffect}  from 'react'
import {BiLogIn} from 'react-icons/bi'
import { useHistory } from 'react-router';
import PropTypes from 'prop-types'

import validator from '../../../utils/validation.utils';

import Loader from 'react-loader-spinner';

import {connect} from 'react-redux'
import { setAuth } from '../../../redux/actions/auth';

const LoginForm = ({dispatch}) => {

    const history = useHistory();

    const [loader , setLoader] = useState(false);
    const [errors , setErrors] = useState({});
    const [formData ,setFormData ] = useState({
        login : '',
        password: ''
    });
 
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

    const onFocusHandler = () => {
        setErrors({
        })
    }

    const onSubmitHandler = async(e) => {
        e.preventDefault()
        setErrors({})

        const error = validator(formData)

        if(error.hasOwnProperty('login') || error.hasOwnProperty('password')){
            setErrors(error)
            return
        }

        try{
            setLoader(true)

            const response = await fetch('http://localhost:4000/auth/log' , { headers: {"Content-Type" : 'application/json'} , body : JSON.stringify({
                                    email : formData.login ,
                                    password : formData.password
                                }) , method:"POST" })
            
            if(response.status === 200){
                const userData = await response.json()
                window.localStorage.setItem('currentUser' , JSON.stringify(userData))
                dispatch(setAuth(true))
                history.push('/acc')
            }
            
            if(response.status === 400 ){
                setErrors({
                    login : true ,
                    password : true
                })
            }
            setLoader(false)
        }catch(e){
            setLoader(false)
            setErrors({
                ...errors, 
                server: true
            })
        }
        
    }
 
    return(
        <>
            <div className="login_form">
                <form onSubmit={onSubmitHandler}>
                    <input onFocus={onFocusHandler} onChange={onChangeHandlerLogin} value={formData.login} type="text" placeholder="enter your login .  .  ." className={classNames("form_input" , { "error" : errors.login })} />
                    <input onFocus={onFocusHandler} onChange={onChangeHandlerPassword} value={formData.password} type="password" placeholder="enter your password . . ." className={classNames("form_input" , { "error" : errors.password })}/>
                    <button type="submit">
                        Sign in
                        <BiLogIn className="icons"/>
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
                    <div className='server_error'>Server error!</div>
                }
                
            </div>
        </>
    )
}

export default connect()(LoginForm);