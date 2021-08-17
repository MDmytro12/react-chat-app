import React from 'react'
import PropTypes from 'prop-types'

import {DialogItem , NoDialogsItems} from '../components'
import { useEffect } from 'react'

const  DialogItems = ({dialogItemsList , onDialogItemClick}) => {
    
    return(  
        <>  
            <div className="dialogs_items">
                <div className='dialogs_items--wrapper'>
                    {   
                        dialogItemsList.length !== 0 && dialogItemsList.map( (item , index) => <DialogItem key={index} dialogInfo={item} onDialogItemClick={onDialogItemClick} />) 
                        
                    }
                    {
                        dialogItemsList.length === 0 && <NoDialogsItems />
                    }
                </div>
            </div> 
        </>
    ) 
}

DialogItems.propTypes = {
    dialogItemsData : PropTypes.array
}

export default DialogItems;