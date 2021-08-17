import React from 'react' 

import {RiMailSendLine} from 'react-icons/ri'
import {FaPen} from 'react-icons/fa'

const DialogSender= () => {
    return(
        <>
            <div className="dialog_sender">
                <div className="form_typing">
                    <FaPen /> . . .
                </div>
                <form >
                    <textarea className="dialog_sender_ta" placeholder="Enter message . . ."></textarea>
                    <button className="dialog_sender_bs">
                        <RiMailSendLine />
                    </button>
                </form>
            </div>
        </>
    )
}

export default DialogSender;