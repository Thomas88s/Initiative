import React, { useContext, useEffect } from "react"
import { MessageContext } from "../../messages/MessageProvider"
import { UsersContext } from "../../users/UserProvider"
import { AdminMessageCard } from "./AdminMessageCard"
import { AdminMessageForm } from "./AdminMessageForm"
import "../../messages/Message.css"

export const AdminMessageList = () => {
    const { messages, getMessages } = useContext(MessageContext)
    const { getUsers } = useContext(UsersContext)
   
   
    useEffect(() => {
        getUsers()
        .then(getMessages())
        
    }, [])


    return (
        <>
            <h2>Message Board</h2>
            <div className="messages">
                {messages.map(message => {
                    return <AdminMessageCard key={message.id} message={message} />
                })}
                <AdminMessageForm />
            </div>
          
        </>
    )
}
