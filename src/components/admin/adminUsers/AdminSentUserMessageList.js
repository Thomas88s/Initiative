import React, { useContext, useEffect } from "react"
import { MessageContext } from "../../messages/MessageProvider"
import { UsersContext } from "../../users/UserProvider"
import { MessageCard4 } from "../../messages/MessageCard4"
import "../../messages/Message.css"

export const AdminSentUserMessageList = () => {
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
                    return <MessageCard4 key={message.id} message={message} />
                })}
           
            </div>
        </div>
          
        </>
    )

}