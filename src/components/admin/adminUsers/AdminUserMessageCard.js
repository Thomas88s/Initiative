import React from "react"

import "../../messages/Message.css"

export const AdminUserMessageCard = ({ message }) => {
   
    return (
        
        <section className="adminUserMessageCard">
            <p>Message from Admin:</p>
            <p>{message.textArea}</p>
        </section>
    )
}