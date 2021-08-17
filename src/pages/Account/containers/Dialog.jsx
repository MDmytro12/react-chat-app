import React, { useEffect, useState } from 'react'

import {DialogHeader , DialogMain , DialogSender} from '../components'

import Loader from 'react-loader-spinner'

const Dialog = ({ currentDialogItem}) => {
    
    const [messages , setMessages] = useState([])
    const [loader , setLoader] = useState(false)

    useEffect( () => {

    } , [currentDialogItem] )

    return(
        <>  
          <div className="dialog">

              <hr id="dialog_right"/>
              <hr id="dialog_left"/>

              <DialogHeader />
              
              {
                loader &&
                <div className="loader_div">
                  <Loader 
                      type="Oval"
                      color="#00BFFF"
                      height={100}
                      width={100}
                  />
                  </div>
              }
              {
                !loader && 
                <DialogMain  messages={[]} />
              }

              <DialogSender />
          </div>
        </>
    )
}

export default Dialog;