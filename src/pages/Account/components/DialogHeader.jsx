import React from 'react' 
import { colorFilter } from '../../../utils/color.utils';

const DialogHeader = () => {

    const {name} = JSON.parse( localStorage.getItem( 'currentUser' ) ) || {name : 'undefine'}

    return(
        <>
            <div className="dialog_header">
                <p className="dialog_header_name active">
                    {name.trim()}
                </p>
                
                <div className="img_border">
                    <div className="dialog_header_no_image" style={{background : colorFilter(name[0])}}>{name.trim()[0]}</div>
                </div>
            </div>
        </>
    )
}

export default DialogHeader;