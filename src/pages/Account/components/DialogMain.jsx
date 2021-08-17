import React from 'react' 
import PropTypes from 'prop-types'

import { Message } from './'

import {AiOutlineComment} from 'react-icons/ai'
import classNames from 'classnames'

const DialogMain = ({messages}) => {

    return(
        <>
            <div className="dialog_dialog">
                <div className={classNames('dialog_messages' , { 'dialogs_messages--empty' :  !messages.length  })}>
                    {
                        messages.length != 0 &&
                        messages.map( ( item , index ) => <Message key={index} messagE={item} /> )
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