import React from "react"
import "../../users/User.css"


  export const AdminUserCard = ({ user }) => {
  
  return   (
      <section className="user" id="userId">
          <h3 className="userName">{user.name}</h3>
          <div className="userEmail">{user.email}</div>
      </section>
   )
  }