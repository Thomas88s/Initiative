import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "../../messages/MessageProvider"
import { UsersContext } from "../../users/UserProvider"
import { AdminMessageCard } from "./AdminMessageCard"
import { AdminMessageForm } from "./AdminMessageForm"
import "../../messages/Message.css"

export const AdminHomeMessageList = () => {
    const { messages, getMessages } = useContext(MessageContext)
    const { getUsers } = useContext(UsersContext)
    

    useEffect(() => {
        getUsers()
        .then(getMessages())
        
    }, [])

    

    let sortedMessages = messages.sort((a,b) => {
        return parseInt(a.date.split("-").join("")) - parseInt(b.date.split("-").join(""))
      })
      
      return (
        <>
          <div className="messages">
                {sortedMessages.map(message => {
                    return <AdminMessageCard key={message.id} message={message} />
                })}
                
            </div>
          
        </>
    )
}
