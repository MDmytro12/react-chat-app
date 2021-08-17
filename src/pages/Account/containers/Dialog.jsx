import React, { useEffect, useState } from 'react'

import {DialogHeader , DialogMain , DialogSender} from '../components'

import Loader from 'react-loader-spinner'
import socketClientIO from 'socket.io-client'

const ENDPOINT = 'http://localhost:4000'

const socket = socketClientIO(ENDPOINT)

const Dialog = ({ currentDialogItem}) => {

    const [loader , setLoader] = useState(false)
    const [messages , setMessages] = useState([])

     socket.on('dialog_message' , async (data) => {
        setMessages(data)
      })

    useEffect( () => {
      socket.emit('start_getm' , {dialogId : currentDialogItem.dialogId})
      socket.on('message_from_server' , (data) => {
        setMessages(data)
      })

     

    } ,[messages])

    const onSenderMessage = (message) => {
      socket.emit('dialog_message' , {
        content : message ,
        dialogId : currentDialogItem.dialogId ,
        authors : JSON.parse(localStorage.getItem('currentUser')).email ,
        isReadedBy : [JSON.parse(localStorage.getItem('currentUser')).email] ,
        sended_at : Date.now()
      })
    }

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
                !loader   && 
                <DialogMain partnerName={currentDialogItem.name} messages={messages}/>
              }

              <DialogSender currentDialog={currentDialogItem} onSenderMessage={onSenderMessage} />
          </div>
        </>
    )
}

export default Dialog;