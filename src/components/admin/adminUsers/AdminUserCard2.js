import React, { useContext, useEffect } from "react"
import "../../users/User.css"
import { VolunteerContext } from "../../volunteers/VolunteerProvider"


export const AdminUserCard2 = ({ user }) => {
//   const { getVolunteersById, volunteers } = useContext(VolunteerContext)
  
  
  useEffect(() => {
     
    }, [])
    
    
    // const foundVolunteer = volunteers.find(volunteer => (volunteer.userId === user.id))
    
    // console.log(foundVolunteer)
  return   (
      <section className="user" id="userId">
          <h3 className="userName">{user.name}</h3>
          <div className="userEmail">{user.email}</div>
          {/* <div className="userEmail">User{user.isAccepted}</div> */}
      </section>
   )
 }