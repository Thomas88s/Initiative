import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "../../messages/MessageProvider"
import { UsersContext } from "../../users/UserProvider"
import { AdminMessageCard2 } from "./AdminMessageCard2"
import { AdminMessageCard } from "./AdminMessageCard"
import { MessageTagContext } from "../../tags/MessageTagProvider"
import "../../messages/Message.css"

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

export const AdminMessageList = () => {
    const { messages, getMessages, addMessage } = useContext(MessageContext)
    const { getUsers, users, getUserById } = useContext(UsersContext)
    const { addMessageTag } = useContext(MessageTagContext)
    const currentUserId = parseInt(sessionStorage.getItem("App_user"))
   
    const user = getUserById



    const [selectedUser, setSelectedUser] = useState({
        name: "",
        address: "",
        phoneNumber: "",
        birthDate: "",
        
    });

    const [message, setMessage] = useState({
        textArea: "",
        senderId: currentUserId,
        receiverId: 0,
        date: ""
    })

   
    useEffect(() => {
        getUsers()
        .then(getMessages())
        
    }, [])

    const handleSelectUser = (event) => {

        if (selectedUser === "") {
            window.alert("Cannot post blank message")
        } else if (event.target.value !== "0") {
        const selectedUserId = parseInt(event.target.value)
        const foundUser = users.find(user => user.id === selectedUserId)
        setSelectedUser(foundUser)
    }}

    let foundSentMessages = messages.filter(message => (message.receiverId === selectedUser.id))
    let foundReceivedMessages = messages.filter(message => (message.senderId === selectedUser.id))

    let sortedSentMessages = foundSentMessages.sort((a,b) => {
        return parseInt(a.date.split("-").join("")) - parseInt(b.date.split("-").join(""))
      })
    let sortedReceivedMessages = foundReceivedMessages.sort((a,b) => {
        return parseInt(a.date.split("-").join("")) - parseInt(b.date.split("-").join(""))
      })

      

      const lastIndex = messages.length - 1
      
      const handleControlledInputChange = (event) => {
        const newMessage = { ...message }
        newMessage[event.target.id] = event.target.value
        setMessage(newMessage)
    }

      const handleSaveMessage = () => {
        if (message.textArea === "") {
            window.alert("Cannot post blank message")
        } else {
            addMessage({ 
                textArea: message.textArea,
                senderId: currentUserId,
                receiverId: selectedUser.id,
                date: today
            })
                .then(() => setMessage({ textArea: "",
                senderId: currentUserId,
                receiverId: 0 }))
        }
    }

    const handleAdd = (event) => {
        addMessageTag({
            userId: selectedUser.id,
            messageId: lastIndex >= 0 ? messages[lastIndex].id + 1 : 1,
        })

        }
    
   
    return (
        <>
        <h2>Message Board</h2>
         <div className="form-group">
              <label htmlFor="userId">Search For a User</label>
              <select name="user" id="userId" className="form-control" value={user.id} onChange={handleSelectUser}>
                <option value="0">User Select...</option>
                {users.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.name}
              
                  </option>
                ))}
              </select>
            </div>
            <div  className="messagesSent">
            <h4>To</h4>
            <div className="SentMessages">
                {sortedSentMessages.map(message => {
                    return <AdminMessageCard2 key={message.id} message={message} />
                })}
            </div>    
                
            </div>
            <div className="messagesReceived">
            <h4>From</h4>
            <div className="receivedMessages">
                {sortedReceivedMessages.map(message => {
                    return <AdminMessageCard key={message.id} message={message} />
                })}

            </div>
            </div>
            <h4>Send {selectedUser?.name} a message:</h4>
                  <div className="form-group">
                    <textarea type="text" id="textArea" rows="4" className="form-control" onChange={handleControlledInputChange} value={message.textArea} />
                </div>
            <button className="messageButton" id={message.id}
                onClick={event => {
                    handleAdd(event)
                    handleSaveMessage()
                }}>
                Post
            </button>
       
          
        </>
    )
}
