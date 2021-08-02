import { React, useContext, useEffect} from "react"
import { UsersContext } from "./UserProvider"
import { UserCard } from "./UserCard"
import "./User.css"

export const UserProfile = () => {
    const { getUsers, users } = useContext(UsersContext)
    let foundUser = users.find(user => (user.id === parseInt(sessionStorage.getItem("App_user"))))
  

    useEffect(() => {
        getUsers()
        
      }, [])
    
    
    return (
        <>
  
  {/* <h1>Welcome {foundUser.name}</h1> */}
 
   {  
   foundUser?  <div className="users">
        <UserCard key={foundUser.id} user={foundUser} />
    </div> : <div></div>
    }
  </>
)
}