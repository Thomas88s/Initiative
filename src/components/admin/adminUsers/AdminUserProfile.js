import { React, useContext, useEffect, useState} from "react"
import { UsersContext } from "../../users/UserProvider"
import { ServiceContext } from "../../services/ServiceProvider"
import { MessageContext } from "../../messages/MessageProvider"
import { AdminUserServiceCard } from "./AdminUserServiceCard"
import { TagContext } from "../../tags/TagProvider"
import { AdminUserMessageCard } from "./AdminUserMessageCard"
import { AdminUserProfileCard } from "../../users/UserProfileCard"
import "./AdminUsers.css"


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
        } else if (event.target.value !== "0"){
        const selectedUserId = parseInt(event.target.value)
        const foundUser = users.find(user => user.id === selectedUserId)
        setSelectedUser(foundUser)
    }}

    let foundTags = tags.filter(tag => (tag.userId === selectedUser.id)) 
    let foundMessages = messages.filter(message => (message.senderId === selectedUser.id)) 

    let sortedReceivedMessages = foundMessages.sort((a,b) => {
        return parseInt(a.date.split("-").join("")) - parseInt(b.date.split("-").join(""))
      })

    
    return (
        <>
    <div className="form-group">
              <label htmlFor="userId"></label>
              <select name="user" id="userId" className="form-control" value={user.id} onChange={handleSelectUser}>
                <option value="0">Please Select a User</option>
                
                {users.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
    </div>

    <div className="adminUserProfile">
        <h1>Users Profile</h1>
        {  
        <div>
            <AdminUserProfileCard key={selectedUser.id} user={selectedUser} />
        </div> 
        }
    </div>
          
    <div className="adminUserServices">
        <h2>Services User Subscribed To</h2>
                <div className="messages">
                    {foundTags.map(service => {
                        return <AdminUserServiceCard key={service.service.id} service={service.service} />
                    })}
    </div>

    </div>
    
    <div className="adminUserMessages">
       <h2>User Messages</h2>
            <div className="messages">
                {sortedReceivedMessages.map(message => {
                    return <AdminUserMessageCard key={message.id} message={message} />
                })}
            </div>
    </div>

  </>
)
}