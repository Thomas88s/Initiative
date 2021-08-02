import React, { useContext, useEffect } from "react"
import { MessageContext } from "../messages/MessageProvider"
import { UsersContext } from "./UserProvider"
import { MessageCard } from "../messages/MessageCard"
import "./User.css"

export const UserReceivedMessageList = () => {
    const { messages, getMessages } = useContext(MessageContext)
    const { getUsers } = useContext(UsersContext)

    let user = parseInt(sessionStorage.getItem("App_user"))
    let foundReceivedMessages = messages.filter(message => (message.receiverId === user)) 
   
    let sortedMessages = foundReceivedMessages.sort((a,b) => {
        return parseInt(a.date.split("-").join("")) - parseInt(b.date.split("-").join(""))
      })

    useEffect(() => {
        getMessages()
        .then(getUsers())
      
       
    }, [])

    
    return (
        <> 
        <div className="userReceivedMessages">
            <h2>Messages Received</h2>
            <div className="messages">
                {sortedMessages.map(message => {
                    return <MessageCard key={message.id} message={message} />
                })}
           
            </div>
        </div>
          
        </>
    )

}
