import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import bigLogoSvg from '../../assets/img/logo.svg'
import smallLogoSvg from '../../assets/img/logo_small.svg'

import {RegisterForm , RegisterSuccess , RegisterFailed} from './components'

import './Register.css'

const RegisterPage = ( { setTitle , register}) => {

    const [content , setContent] = useState('form') 
    const [loader , setLoader] = useState(false)

    const changeContent = (contentType) => {
        setContent(contentType)
    }

    return (
        <>
            <div className="register">
                <div className="login_title">
                    <p className='register_title'>registration</p>
                    <hr/>
                    <img src={bigLogoSvg} alt="Icon!" className='login_title_icon_1 register_title_icon_1' />
                    <img src={smallLogoSvg} alt="Icon!" className='login_title_icon_2 register_title_icon_2' />
                </div>

                {
                    content === 'form' &&
                    <>
                        <RegisterForm loader={loader} setLoader={setLoader} setContent={changeContent} register={register} setContent={changeContent} />
                        <div className="end_title">
                            <p>You alreay have an account?  </p>
                            <Link to='/login'>Sign in!</Link>
                        </div>
                    </> 
                }

                {
                    content === 'success' && <RegisterSuccess 
                        setContent={changeContent}
                    />
                }

                {
                    content === 'failed' && <RegisterFailed 
                    setContent={changeContent}
                    />
                }
            </div>
        </>
    )
}

RegisterPage.propTypes = {
    setTitle: PropTypes.func,
    register: PropTypes.func
}


export default RegisterPage;