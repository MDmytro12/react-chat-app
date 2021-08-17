import React from 'react'
import PropTypes from 'prop-types'
import { useRouteMatch } from 'react-router'
import {BsQuestionSquare} from 'react-icons/bs'

import './404.css'

const NoMatchPage = () => {
    const params = useRouteMatch()

    return(
        <>  
            <div className="nomatch">
                <p>Path <span>" {params.params[0]} "</span> doesn`t  exist! </p>
                <BsQuestionSquare  className='nomatch_icon'/>
            </div>
            
        </>
    )
}


export default NoMatchPage;