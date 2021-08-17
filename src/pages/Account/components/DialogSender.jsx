import React , { useState , useEffect } from 'react' 

import {RiMailSendLine} from 'react-icons/ri'
import {FaPen} from 'react-icons/fa'

const DialogSender= ({onSenderMessage  , typing , currentDialog , onTypingHandler }) => {

    const [message , setMessage] = useState('')

    useEffect( () => {
        setMessage('')
    }  , [currentDialog] )

    const onMessageHandler = (e) => {
        setMessage(e.target.value)
    }

    const onFocusHandler = (e) => {
        onTypingHandler(true)
    } 
    
    const onBlurHandler = (e) => {
        onTypingHandler(false)
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
                    setMessage('')
                }}>
                    <textarea onFocus={onFocusHandler} onBlur={onBlurHandler} value={message} onChange={onMessageHandler} className="dialog_sender_ta" placeholder="Enter message . . ."></textarea>
                    <button className="dialog_sender_bs" type='submit'>
                        <RiMailSendLine />
                    </button>
                </form>
            </div>
        </>
    )
}

export default DialogSender;