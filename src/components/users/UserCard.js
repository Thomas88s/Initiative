import React, { useContext }from "react"
  import { UserContext } from "./UserProvider"
  import { useHistory } from "react-router-dom"
  import "./User.css"


  export const UserCard = ({ user }) => {
  
  
    
  return   (
      <section className="user" id="userId">
          <h3 className="userName">{user.name}</h3>
          <div className="userEmail">Email:  {user.email}</div>
          <div className="userAddress">Address:  {user.address}</div>
          <div className="userPhoneNumber">Phone Number:  {user.phoneNumber}</div>
          <div className="userBirthDate">Birth Date:  {user.birthDate}</div>

          
          
      </section>
   )
  }