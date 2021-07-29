import React, { useContext, useState } from "react";
import { MessageContext } from "./MessageProvider";
import { useHistory, useParams } from "react-router-dom";
import "./Message.css";

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;


export const MessageForm = () => {
    const { addMessage, editMessage } = useContext(MessageContext)
    const currentUserId = parseInt(sessionStorage.getItem("App_user"))

    const [message, setMessage] = useState({
        textArea: "",
        receiverId: 1,
        senderId: currentUserId,
        timeStamp: ""
    })

    const { messageId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newMessage = { ...message }
        newMessage[event.target.id] = event.target.value
        newMessage.timeStamp = today
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
                    timeStamp: message.timeStamp
                })
                    .then(() => history.push("/messages"))
            } else {
                addMessage(message)
                    .then(() => history.push("/messages"))
            }
        }
    }

    return (
        <form className="messageForm">
            <h4>Send message to Services</h4>
            <fieldset>
                <div className="form-group">
                    <textarea type="text" id="textArea" required autoFocus className="form-control" onChange={handleControlledInputChange} value={message.textArea} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={event => {
                    handleSaveMessage()
                }}>
                Post
            </button>
        </form>
    )
}