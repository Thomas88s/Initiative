import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { UserProvider } from "./users/UserProvider"
import { UserProfile } from "./users/UserProfile"
import { AdminUserList } from "./admin/adminUsers/AdminUserList"
import { AdminUserProfile } from "./admin/adminUsers/AdminUserProfile"
import { AdminMessageList } from "./admin/adminMessages/AdminMessageList"
import { AdminHomeReceivedMessageList } from "./admin/adminMessages/AdminHomeReceivedMessages"
import { AdminHomeSentMessageList } from "./admin/adminMessages/AdminHomeSentMessages"
import { AdminServiceList } from "./admin/adminServices/AdminServiceList"
import { AdminServiceForm } from "./admin/adminServices/AdminServiceForm"
import { MessageProvider } from "./messages/MessageProvider"
import { MessageForm } from "./messages/MessageForm"
import { ServiceForm } from "./services/ServiceForm"
import { ServiceList } from "./services/ServiceList"
import { ServiceProvider } from "./services/ServiceProvider"
import { TagProvider } from "./tags/TagProvider"
import { UserServiceList } from "./users/UserServices"
import { UserProfileServiceList } from "./users/UserProfileServices"
import { UserSentMessageList } from "./users/UserSentMessageList"
import { UserReceivedMessageList } from "./users/UserReceivedMessageList"




export const ApplicationViews = () => {
    return (
        <>

            <Route exact path="/">
                <Home />
            </Route>

            <ServiceProvider>
                <MessageProvider>
                    <TagProvider>
                        <UserProvider>
                            <Route exact path="/users">
                                <UserProfile />
                                <UserProfileServiceList />
                                <UserReceivedMessageList />
                            </Route>
                        </UserProvider>
                    </TagProvider>
                </MessageProvider>
            </ServiceProvider>

            <MessageProvider>
                <UserProvider>
                    <Route exact path="/messages">
                        <UserSentMessageList />
                        <UserReceivedMessageList />
                        <MessageForm />
                    </Route>
                </UserProvider>
            </MessageProvider>

            <ServiceProvider>
                <TagProvider>
                    <UserProvider>
                        <Route exact path="/services">
                            <ServiceList />
                            <UserServiceList />
                        </Route>
                        <Route path="/services/create">
                            <ServiceForm />
                        </Route>
                        <Route path="/services/edit/:serviceId(\d+)">
                            <ServiceForm />
                        </Route>
                    </UserProvider>
                </TagProvider>
            </ServiceProvider>

            <UserProvider>
                <ServiceProvider>
                    <MessageProvider>
                        <Route exact path="/admin7HmKXhQsrnTpYflD">
                            <AdminUserList />
                             <AdminHomeReceivedMessageList />
                             <AdminHomeSentMessageList />
                            <ServiceForm />
                        </Route>
                    </MessageProvider>
                </ServiceProvider>    
            </UserProvider>

            <ServiceProvider>
                <MessageProvider>
                    <TagProvider>
                        <UserProvider>
                            <Route exact path="/admin/usersTdu8ngstqVzhP4D9">
                                <AdminUserProfile />
                            </Route>
                        </UserProvider>
                    </TagProvider>
                </MessageProvider>
            </ServiceProvider>

            <UserProvider>
                <MessageProvider>
                    <Route path="/admin/messages1sZY5bgG04Pw7aws">
                        <AdminMessageList />
                    </Route>
                </MessageProvider>
            </UserProvider>

            <ServiceProvider>
                <TagProvider>
                    <UserProvider>
                        <Route exact path="/admin/services0sH0AOSszsP5GEUh">
                            <AdminServiceList />
                            <AdminServiceForm />
                        </Route>
                        <Route path="/admin/services/create">
                            <ServiceForm />
                        </Route>
                        <Route path="/admin/services/edit/:serviceId(\d+)">
                            <ServiceForm />
                        </Route>
                    </UserProvider>
                </TagProvider>
            </ServiceProvider>

        </>
    )
}