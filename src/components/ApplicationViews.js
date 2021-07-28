import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { UserProvider } from "./users/UserProvider"
import { UserList } from "./users/UserProfile"
import { AdminUserList } from "./admin/AdminUserList"
import { AdminMessageList } from "./admin/AdminMessageList"
import { AdminServiceForm } from "./admin/AdminServiceForm"
import { MessageProvider } from "./messages/MessageProvider"
import { MessageList } from "./messages/MessageList"
import { ServiceForm } from "./services/ServiceForm"
import { ServiceList } from "./services/ServiceList"
import { ServiceProvider } from "./services/ServiceProvider"
import { TagProvider } from "./tags/TagProvider"
import { UserServiceList } from "./users/UserServices"
import { UserMessageList } from "./users/UserMessageList"




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
                                <UserList />
                                <UserServiceList />
                                <UserMessageList />
                            </Route>
                        </UserProvider>
                    </TagProvider>
                </MessageProvider>
            </ServiceProvider>

            <MessageProvider>
                <Route exact path="/messages">
                    <MessageList />
                </Route>
            </MessageProvider>

            <ServiceProvider>
                <TagProvider>
                    <Route exact path="/services">
                        <ServiceList />
                    </Route>
                    <Route path="/services/create">
                        <ServiceForm />
                    </Route>
                    <Route path="/services/edit/:serviceId(\d+)">
                         <ServiceForm />
                    </Route>
                </TagProvider>
            </ServiceProvider>

            <UserProvider>
                <ServiceProvider>
                    <MessageProvider>
                        <Route exact path="/admin">
                            <AdminUserList />
                            <AdminMessageList />
                            <ServiceForm />
                        </Route>
                    </MessageProvider>
                </ServiceProvider>    
            </UserProvider>

            <ServiceProvider>
                <MessageProvider>
                    <TagProvider>
                        <UserProvider>
                            <Route exact path="/admin/users">
                                <UserList />
                                <UserServiceList />
                                <UserMessageList />
                            </Route>
                        </UserProvider>
                    </TagProvider>
                </MessageProvider>
            </ServiceProvider>

            <UserProvider>
                <MessageProvider>
                    <Route path="/admin/messages">
                        <AdminMessageList />
                    </Route>
                </MessageProvider>
            </UserProvider>

            <ServiceProvider>
                <TagProvider>
                    <Route exact path="/admin/services">
                        <ServiceList />
                        <AdminServiceForm />
                    </Route>
                    <Route path="/admin/services/create">
                        <ServiceForm />
                    </Route>
                    <Route path="/admin/services/edit/:serviceId(\d+)">
                         <ServiceForm />
                    </Route>
                </TagProvider>
            </ServiceProvider>

        </>
    )
}