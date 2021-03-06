import React, { useContext, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { MessageContext } from "../../messages/MessageProvider";
import { UsersContext } from "../../users/UserProvider";
import "../../messages/Message.css";

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;


export const AdminMessageForm = () => {
    const { addMessage, editMessage, getMessages } = useContext(MessageContext)
    const { users, getUsers } = useContext(UsersContext)
    const currentUserId = parseInt(sessionStorage.getItem("App_user"))
    
    
    const [message, setMessage] = useState({
        textArea: "",
        senderId: currentUserId,
        receiverId: 0,
        date: ""
    })

    useEffect(() => {
        getMessages()
        .then(getUsers())
    }, [])
  
    
    const { messageId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newMessage = { ...message }
        newMessage[event.target.id] = event.target.value
        setMessage(newMessage)
    }
    
   
    
    
    const handleSaveMessage = () => {
        if (message.textArea === "") {
            window.alert("Cannot post blank message")
        } else {
            if (messageId) {
                editMessage({
                    id: message.id,
                    textArea: message.textArea,
                    senderId: currentUserId,
                    date: message.date
                })
                    .then(() => history.push("/messages"))
            } else {
                addMessage({ 
                    textArea: message.textArea,
                    senderId: currentUserId,
                    receiverId: parseInt(message.receiverId),
                    date: today
                })
                    .then(() => setMessage({ textArea: "",
                    senderId: currentUserId,
                    receiverId: 0 }))
            }
        }
    }

    return (

        <form className="messageForm">
            <h2>Send A Message</h2>
            <fieldset>
                <div className="form-group">
                <label htmlFor="receiver">Send Message to:</label>
                    <select name="receiver" id="receiverId" className="form-control" value={message.receiverId} onChange={handleControlledInputChange}>
                <option value="0">Select a client</option>
                {users.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
                </div>
                <div className="form-group">
                    <textarea type="text" id="textArea" required autoFocus className="form-control" onChange={handleControlledInputChange} value={message.textArea} />
                </div>
            </fieldset>
            <button className="messageButton"
                onClick={event => {
                 
                    handleSaveMessage()
                }}>
                Post
            </button>
        </form>
    )
}