import React from 'react'

import {FaRegPaperPlane} from 'react-icons/fa'

const NoDialogsItems = () => {
    return(
        <>
            <p className="no_dialogs_items">
                You don`t have any dialogs!
                <FaRegPaperPlane className="icons_no_dialogs_items" />
            </p>
        </>
    )
}

export default NoDialogsItems;