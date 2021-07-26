import React, { useContext, useEffect, useState } from "react";
import { MessageContext } from "./MessageProvider";
import "./Message.css";
import { useHistory, useParams } from "react-router-dom";

export const MessageForm = () => {
    const { addMessage, editMessage } = useContext(MessageContext)
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))

    const [message, setMessage] = useState({
        textArea: "",
        userId: currentUserId,
        timeStamp: ""
    })

    const { messageId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newMessage = { ...message }
        newMessage[event.target.id] = event.target.value
        newMessage.timeStamp = Date.now()
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
                    userId: currentUserId,
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