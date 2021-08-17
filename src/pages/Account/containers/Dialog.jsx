import React, { useEffect, useState } from 'react'

import {DialogHeader , DialogMain , DialogSender} from '../components'

import Loader from 'react-loader-spinner'
import socketClientIO from 'socket.io-client'
import { useRef } from 'react'

const ENDPOINT = 'http://localhost:4000'

const socket = socketClientIO(ENDPOINT)

const Dialog = ({ currentDialogItem }) => {

    const dialogWindow = useRef(null)

    const [loader , setLoader] = useState(false)
    const [messages , setMessages] = useState([])
    const [typing , setTyping] = useState(false)

    socket.on('dialog_message' , (mes) => {
      setMessages(mes)
    })

    socket.on('typing' , (value) => {
      setTyping(value)
    })

    useEffect(() => {
      async function getMessages(){
        const data = await fetch( 'http://localhost:4000/acc/getmbdi' , {method : "POST" , headers : {"Content-Type" : "application/json"} , body : JSON.stringify( { dialogId : currentDialogItem.dialogId }  ) } )
              .then( res => res.json())
        setMessages(data)
      } 
      getMessages()

      } , [currentDialogItem ]) 

    const onSenderMessage = (message) => {
      socket.emit('dialog_message' , {
        content : message ,
        dialogId : currentDialogItem.dialogId ,
        authors : JSON.parse(localStorage.getItem('currentUser')).email ,
        isReadedBy : [JSON.parse(localStorage.getItem('currentUser')).email] ,
        sended_at : Date.now()
      })
    }

    const onTypingHandler = (value) => {
        socket.emit('typing' , value)
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
                <DialogMain  dialogWindow={dialogWindow} partnerName={currentDialogItem.name} messages={messages}/>
              }

              <DialogSender  typing={typing} onTypingHandler={onTypingHandler} currentDialog={currentDialogItem} onSenderMessage={onSenderMessage} />
          </div>
        </>
    )
}

export default Dialog;