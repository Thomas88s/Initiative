import React from "react"
import "./User.css"


  export const AdminUserProfileCard = ({ user }) => {
  
  
    
  return   (
      <section className="userProfileCard" id="userId">
          <h3 className="userName">{user.name}</h3>
          <div className="userEmail">Email:  {user.email}</div>
          <div className="userAddress">Address:  {user.address}</div>
          <div className="userPhoneNumber">Phone Number:  {user.phoneNumber}</div>
          <div className="userBirthDate">Birth Date:  {user.birthDate}</div>

          
          
      </section>
   )
  }