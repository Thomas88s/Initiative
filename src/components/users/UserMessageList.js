import React, { useContext, useEffect } from "react"
import { MessageContext } from "../messages/MessageProvider"
import { UsersContext } from "./UserProvider"
import { MessageCard } from "../messages/MessageCard"
import "../messages/Message.css"

export const UserMessageList = () => {
    const { messages, getMessages } = useContext(MessageContext)
    const { getUsers } = useContext(UsersContext)

    let user = parseInt(sessionStorage.getItem("App_user"))
    let foundMessages = messages.filter(message => (message.receiverId === user)) 
    

    useEffect(() => {
        getMessages()
        .then(getUsers())
       
    }, [])


    return (
        <>
            <h2>Message Board</h2>
            <div className="messages">
                {foundMessages.map(message => {
                    return <MessageCard key={message.id} message={message} />
                })}
           
            </div>
          
        </>
    )
}
