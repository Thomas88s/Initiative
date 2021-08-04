import React, { useContext, useEffect } from "react"
import { MessageContext } from "../../messages/MessageProvider"
import { UsersContext } from "../../users/UserProvider"
import { MessageCard3 } from "../../messages/MessageCard3"
import "../../users/User.css"

export const AdminReceivedUserMessageList = () => {
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
                    return <MessageCard3 key={message.id} message={message} />
                })}
           
            </div>
        </div>
          
        </>
    )

}