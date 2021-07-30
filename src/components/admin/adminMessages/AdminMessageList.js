import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "../../messages/MessageProvider"
import { UsersContext } from "../../users/UserProvider"
import { AdminMessageCard } from "./AdminMessageCard"
import { AdminMessageForm } from "./AdminMessageForm"
import "../../messages/Message.css"

export const AdminMessageList = () => {
    const { messages, getMessages } = useContext(MessageContext)
    const { getUsers, users, getUserById } = useContext(UsersContext)
    const user = getUserById

    const [selectedUser, setSelectedUser] = useState({
        name: "",
        address: "",
        phoneNumber: "",
        birthDate: "",
        
    });
   
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



    

    let foundMessages = messages.filter(message => (message.receiverId === selectedUser.id))

    let sortedMessages = foundMessages.sort((a,b) => {
        return parseInt(a.date.split("-").join("")) - parseInt(b.date.split("-").join(""))
      })


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
 
            <div className="messages">
                {sortedMessages.map(message => {
                    return <AdminMessageCard key={message.id} message={message} />
                })}
                <AdminMessageForm />
            </div>
          
        </>
    )
}
