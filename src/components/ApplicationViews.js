import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { UserProvider } from "./users/UserProvider"
import { UserProfile } from "./users/UserProfile"
import { AdminUserList } from "./admin/adminUsers/AdminUserList"
import { AdminUserProfile } from "./admin/adminUsers/AdminUserProfile"
import { AdminMessageList } from "./admin/AdminMessageList"
import { AdminServiceList } from "./admin/AdminServiceList"
import { AdminServiceForm } from "./admin/AdminServiceForm"
import { MessageProvider } from "./messages/MessageProvider"
import { MessageForm } from "./messages/MessageForm"
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
                                <UserProfile />
                                <UserServiceList />
                                <UserMessageList />
                            </Route>
                        </UserProvider>
                    </TagProvider>
                </MessageProvider>
            </ServiceProvider>

            <MessageProvider>
                <UserProvider>
                    <Route exact path="/messages">
                        <UserMessageList />
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
                                <AdminUserProfile />
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
                    <UserProvider>
                        <Route exact path="/admin/services">
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