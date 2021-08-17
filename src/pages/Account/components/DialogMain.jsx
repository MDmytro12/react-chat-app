import React , { useEffect } from 'react' 
import PropTypes from 'prop-types'

import { Message } from './'

import {AiOutlineComment} from 'react-icons/ai'
import classNames from 'classnames'

const DialogMain = ({messages , partnerName , dialogWindow}) => {
    useEffect(() => {
        dialogWindow.current.scrollTo( 0 , dialogWindow.current.scrollHeight )
    } , [messages])
    return(
        <>
            <div ref={dialogWindow} className="dialog_dialog">
                <div className={classNames('dialog_messages' , { 'dialogs_messages--empty' :  !messages.length  })}>
                    {
                        messages.length !== 0 &&
                        messages.map( ( item , index ) => <Message partnerName={partnerName} key={index} message={item} /> )
                    } 
                    {
                        messages.length === 0 &&
                        <div className="dialog_empty">
                            <AiOutlineComment className="dialog_empty_icon" />
                            Your dialogue is empty.
                            <span>Be the first to start it!</span>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

DialogMain.propTypes = {
    messages : PropTypes.array
}

export default DialogMain;