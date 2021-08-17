import React from 'react' 
import classNames from 'classnames'

import {FaRegEyeSlash , FaRegEye} from 'react-icons/fa'
import { colorFilter } from '../../../utils/color.utils'

import PropTypes from 'prop-types'

const Message = ({ messagE}) => {

    let { isMe  , message} =  messagE
   
    return(
        <>
            <div className={classNames('dialog_mes' , { 'is-me' : isMe })}>
                <div className="mes_avatar_border">
                    <div className='mes_avatar_avatar' style={{background : colorFilter('I')}}>I</div>
                </div>
                <div className={classNames( "message" , { 'is-me' : isMe } )}>
                    <div className={classNames('message_content' , { 'is-me' : isMe })}>
                       {message.content}
                    </div>
                    <div className={classNames( "message_date" , { 'is-me' : isMe } )}>
                        {message.sended_at}
                    </div>
                    {               
                        !message.isReaded && <FaRegEyeSlash className={classNames("saw_icon" , { 'is-me' : isMe })} />
                    }
                    {
                        message.isReaded && <FaRegEye className={classNames("saw_icon" , { 'is-me' : isMe })} />
                    }
                </div>

            </div>
        </>
    )
}

Message.propTypes = {
    messagE : PropTypes.object
}

export default Message;