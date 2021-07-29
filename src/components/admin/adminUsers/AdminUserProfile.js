import { React, useContext, useEffect} from "react"
import { UsersContext } from "../../users/UserProvider"
import { ServiceContext } from "../../services/ServiceProvider"
import { MessageContext } from "../../messages/MessageProvider"
import { AdminUserServiceCard } from "./AdminUserServiceCard"
import { TagContext } from "../../tags/TagProvider"
import { AdminUserMessageCard } from "./AdminUserMessageCard"
import { UserCard } from "../../users/UserCard"
import "../../users/User.css"


export const AdminUserProfile = () => {
    const { getUsers, users } = useContext(UsersContext)
    const { messages, getMessages } = useContext(MessageContext)
    const { getServices } = useContext(ServiceContext)
    const { getTags, tags } = useContext(TagContext)
    let foundUser = users.find(user => (user.id === parseInt(sessionStorage.getItem("App_user"))))
    let user = parseInt(sessionStorage.getItem("App_user"))
    let foundTags = tags.filter(tag => (tag.userId === user)) 
    let foundMessages = messages.filter(message => (message.receiverId === user)) 

    useEffect(() => {
        getMessages()
        .then(getUsers())
        .then(getTags())
        .then(getServices())
      }, [])
    
    
    return (
        <>
  
    <h1>User Profile</h1>
   {  
   foundUser?  <div className="users">
        <UserCard key={foundUser.id} user={foundUser} />
    </div> : <div></div>
    }

     <h2>User  Subscribed Services</h2>
            <div className="messages">
                {foundTags.map(service => {
                    return <AdminUserServiceCard key={service.service.id} service={service.service} />
                })}
            </div>

       <h2>User Messages</h2>
     <div className="messages">
         {foundMessages.map(message => {
             return <AdminUserMessageCard key={message.id} message={message} />
         })}
     </div>

  </>
)
}