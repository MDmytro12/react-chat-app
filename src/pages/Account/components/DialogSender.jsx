import React , { useState , useEffect } from 'react' 

import {RiMailSendLine} from 'react-icons/ri'
import {FaPen} from 'react-icons/fa'

const DialogSender= ({onSenderMessage , currentDialog}) => {

    const [message , setMessage] = useState('')
    const [typing , setTyping] = useState(false)

    useEffect( () => {
        setMessage('')
    }  , [currentDialog] )

    const onMessageHandler = (e) => {
        setMessage(e.target.value)
    }

    return(
        <>
            <div className="dialog_sender">
                {
                    typing &&
                    <div className="form_typing">
                        <FaPen /> . . .
                    </div>
                }
                
                <form onSubmit={(e) => {
                    e.preventDefault()
                    onSenderMessage(message)
                    setMessage('    ')
                }}>
                    <textarea value={message} onChange={onMessageHandler} className="dialog_sender_ta" placeholder="Enter message . . ."></textarea>
                    <button className="dialog_sender_bs" type='submit'>
                        <RiMailSendLine />
                    </button>
                </form>
            </div>
        </>
    )
}

export default DialogSender;