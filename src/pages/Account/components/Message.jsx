import React from 'react' 
import classNames from 'classnames'

import {FaRegEyeSlash , FaRegEye} from 'react-icons/fa'
import { colorFilter  } from '../../../utils/color.utils'
import dateFilter from '../../../utils/date.util'

import PropTypes from 'prop-types'

const Message = ({ message , partnerName}) => {
    
    const { sended_at , content  } = message
    const isMe = message.authors === JSON.parse(localStorage.getItem('currentUser')).email
    const name = isMe ? JSON.parse(localStorage.getItem('currentUser')).name : partnerName
   
    return(
        <>
            <div className={classNames('dialog_mes' , { 'is-me' : isMe })}>
                <div className="mes_avatar_border">
                    <div className='mes_avatar_avatar' style={{background : colorFilter(name[0])}}>{name[0]}</div>
                </div>
                <div className={classNames( "message" , { 'is-me' : isMe } )}>
                    <div className={classNames('message_content' , { 'is-me' : isMe })}>
                       {message.content}
                    </div>
                    <div className={classNames( "message_date" , { 'is-me' : isMe } )}>
                        {dateFilter(new Date(message.sended_at))}
                    </div>
                    {/* {               
                        !message.isReaded && <FaRegEyeSlash className={classNames("saw_icon" , { 'is-me' : isMe })} />
                    }
                    {
                        message.isReaded && <FaRegEye className={classNames("saw_icon" , { 'is-me' : isMe })} />
                    } */}
                </div>

            </div>
        </>
    )
}

Message.propTypes = {
    messagE : PropTypes.object
}

export default Message;