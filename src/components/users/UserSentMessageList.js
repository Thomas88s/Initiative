import React, { useContext, useEffect } from "react"
import { MessageContext } from "../messages/MessageProvider"
import { UsersContext } from "./UserProvider"
import { MessageCard2 } from "../messages/MessageCard2"
import "../messages/Message.css"

export const UserSentMessageList = () => {
    const { messages, getMessages } = useContext(MessageContext)
    const { getUsers } = useContext(UsersContext)

    let user = parseInt(sessionStorage.getItem("App_user"))
    let foundSentMessages = messages.filter(message => (message.senderId === user))

    

    useEffect(() => {
        getMessages()
        .then(getUsers())
       
    }, [])

    return (
        <>
            <h2>Sent Messages</h2>
            <div className="messages">
                {foundSentMessages.map(message => {
                    return <MessageCard2 key={message.id} message={message} />
                })}
           
            </div>
          
        </>
    )

}