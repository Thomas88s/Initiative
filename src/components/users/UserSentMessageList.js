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

    let sortedMessages = foundSentMessages.sort((a,b) => {
        return parseInt(a.date.split("-").join("")) - parseInt(b.date.split("-").join(""))
      })

    useEffect(() => {
        getMessages()
        .then(getUsers())
       
    }, [])

    return (
        <>
        <div className="userSentMessages">
            <h2>Sent Messages</h2>
            <div className="messages">
                {sortedMessages.map(message => {
                    return <MessageCard2 key={message.id} message={message} />
                })}
           
            </div>
        </div>
          
        </>
    )

}