import { React, useContext, useEffect} from "react"
import { UsersContext } from "../users/UserProvider"
import { UserCard } from "../users/UserCard"
import "../users/User.css"

export const AdminUserList = () => {
  const { getUsers, users } = useContext(UsersContext)
   
  useEffect(() => {
    getUsers()

  }, [])

return (
  <>
    <h1>Users</h1>
 
    <div className="users">
    {
      users.map(user => { 
         return <UserCard key={user.id} user={user} />
        }
     )
    }
    </div>
        </>
)}