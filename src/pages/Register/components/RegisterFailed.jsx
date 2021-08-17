import React from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'

import fialedSvg from '../../../assets/img/failed.svg'

const RegisterFailed = ({setContent}) => {
    
    useEffect(() => {
        setTimeout(() => {
            setContent('form')
        } , 30000)
    })

    return(
        <>
            <div className="register_success">
                    <p className="register_success_title">
                        Your registration is failed!
                    </p>
                    <img src={fialedSvg} alt="Icon!" />
                    <Link to="/reg" onClick={() => setContent('form')}>Try again please!</Link>
            </div>
        </>
    )
}

export default RegisterFailed;