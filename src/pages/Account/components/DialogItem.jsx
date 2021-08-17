import React, { useState  , useEffect} from 'react' 
import PropTypes from 'prop-types'

import {colorFilter} from '../../../utils/color.utils'

import dateFilter from '../../../utils/date.util'
import classNames from 'classnames'

const DialogItem = ({ dialogInfo , onDialogItemClick }) => {

    const { message , name } = dialogInfo
  
    return(
        <> 
            <div className={classNames('dialog_item' , { 'active' : dialogInfo.active } )} onClick={ () => onDialogItemClick(dialogInfo.dialogId)} >
                <div className={classNames('dialog_item_avatar' , { 'active' : dialogInfo.online } )}>
                    <div className="dialog_item_no_avatar active" style={{background : colorFilter(name[0])}}>{name.trim()[0].toUpperCase()}</div> 
                </div>
                
                <div className="dialog_item_info">
                    <div className="d_i_i_name">
                        {name}           
                    </div>
                    <div className="d_i_i_content">
                        {message.content}
                    </div>
                    <div className="d_i_i_date">
                        {dateFilter(new Date(message.sended_at))}
                    </div>
                </div>
            </div>
        </>
    )
}

DialogItem.propTypes = {
    message: PropTypes.object ,
    author: PropTypes.object ,
    online: PropTypes.bool
}

export default DialogItem;