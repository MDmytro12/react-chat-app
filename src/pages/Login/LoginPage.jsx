import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import {LoginForm} from './components';

import bigLogoSvg from '../../assets/img/logo.svg'
import smallLogoSvg from '../../assets/img/logo_small.svg'

import './Login.css'

const LoginPage = () => {

    return(
        <>
            <div className="login">
                <div className="login_title">
                    <p>chat</p>
                    <hr/>
                    <img src={bigLogoSvg} alt="Icon!" className='login_title_icon_1' />
                    <img src={smallLogoSvg} alt="Icon!" className='login_title_icon_2' />
                </div>

                <LoginForm/>

                <div className="end_title">
                    <p>You didn`t have account?</p>
                    <Link to='/reg'>Sign up!</Link>
                </div>
            </div>
        </>
    )
}

export default LoginPage;