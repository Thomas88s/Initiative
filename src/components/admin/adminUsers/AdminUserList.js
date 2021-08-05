import { React, useContext, useEffect} from "react"
import { UsersContext } from "../../users/UserProvider"
import { AdminUserCard2 } from "./AdminUserCard2"
import "../../users/User.css"

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
         return <AdminUserCard2 key={user.id} user={user} />
        }
     )
    }
    </div>
        </>
)}