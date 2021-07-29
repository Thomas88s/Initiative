import { React, useContext, useEffect, useState} from "react"
import { UsersContext } from "../../users/UserProvider"
import { ServiceContext } from "../../services/ServiceProvider"
import { MessageContext } from "../../messages/MessageProvider"
import { AdminUserServiceCard } from "./AdminUserServiceCard"
import { TagContext } from "../../tags/TagProvider"
import { AdminUserMessageCard } from "./AdminUserMessageCard"
import { UserCard } from "../../users/UserCard"
import "../../users/User.css"


export const AdminUserProfile = () => {
    const { getUsers, users, getUserById } = useContext(UsersContext)
    const { messages, getMessages } = useContext(MessageContext)
    const { getTags, tags } = useContext(TagContext)
    const { getServices } = useContext(ServiceContext)
    const user = getUserById
   
    const [selectedUser, setSelectedUser] = useState({
        name: "",
        address: "",
        phoneNumber: "",
        birthDate: "",
        
    });

    useEffect(() => {
        getUsers()
        .then(getServices())
        .then(getTags())
        .then(getMessages())
    }, [])
    
    const handleSelectUser = (event) => {
        if (selectedUser === "") {
            window.alert("Cannot post blank message")
        } else {
        const selectedUserId = parseInt(event.target.value)
        const foundUser = users.find(user => user.id === selectedUserId)
        setSelectedUser(foundUser)
    }}

    let foundTags = tags.filter(tag => (tag.userId === selectedUser.id)) 
    let foundMessages = messages.filter(message => (message.receiverId === selectedUser.id)) 
    
    return (
        <>
    <div className="form-group">
              <label htmlFor="userId">User: </label>
              <select name="user" id="userId" className="form-control" value={user.id} onChange={handleSelectUser}>
                <option value="0">Select a user</option>
                {users.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
    <h1>User Profile</h1>
   {  
     <div className="users">
        <UserCard key={selectedUser.id} user={selectedUser} />
    </div> 
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