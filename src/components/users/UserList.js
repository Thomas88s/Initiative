import { React, useContext, useEffect, useState } from "react"
import { UsersContext } from "./UserProvider"
import { UserCard } from "./UserCard"
import "./User.css"

export const FriendList = () => {
  const { getUsers, users } = useContext(UsersContext)
   
  useEffect(() => {
    getUsers()

  }, [])

return (
  <>
    <h1>Users</h1>
 
    <div className="users">
    {
      users.map(user => { if(user.currentUserId == sessionStorage.getItem("App_user")){
         return <UserCard key={user.id} user={user} />

      }else return null
      })
    }
    </div>
  </>
)
}