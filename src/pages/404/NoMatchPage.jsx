import React from 'react'
import { useRouteMatch } from 'react-router'
import {BsQuestionSquare} from 'react-icons/bs'

import { useHistory } from 'react-router'
import titleFilter from '../../utils/title.utils'

import './404.css'

const NoMatchPage = () => {
    const params = useRouteMatch()
    const history = useHistory()

    setTimeout(() => {
        history.push('/login')
    } , 10000)

    

    return(
        <>  { titleFilter('404') }
            <div className="nomatch">
                <p>Path <span>" {params.params[0]} "</span> doesn`t  exist! </p>
                <BsQuestionSquare  className='nomatch_icon'/>
            </div>
            
        </>
    )
}


export default NoMatchPage;