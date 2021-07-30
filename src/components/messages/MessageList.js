import React, { useContext, useEffect } from "react"
import { MessageContext } from "./MessageProvider"
import { MessageCard } from "./MessageCard"
import "./Message.css"

export const MessageList = () => {
    const { messages, getMessages } = useContext(MessageContext)

    useEffect(() => {
        getMessages()

    }, [])

    let sortedMessages = messages.sort((a,b) => {
        return parseInt(a.date.split("-").join("")) - parseInt(b.date.split("-").join(""))
      })

    return (
        <>
            <h2>Message Board</h2>
            <div className="messages">
                {sortedMessages.map(message => {
                    return <MessageCard key={message.id} message={message} />
                })}
            </div>
           
        </>
    )
}
