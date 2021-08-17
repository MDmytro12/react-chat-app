import React from 'react'
import { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import successSvg from '../../../assets/img/success.svg'

const RegisterSucces = ({setContent}) => {

    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {  
            history.push('/login')
        } , 30000)
    })

    return(
        <>
            <div className="register_success">
                    <p className="register_success_title">
                        Your registration is success!
                    </p>
                    <img src={successSvg} alt="Icon!" />
                    <Link to="/login" onClick={() => setContent("form")}>Sign in!</Link>
            </div>
        </>
    )
}

export default RegisterSucces;