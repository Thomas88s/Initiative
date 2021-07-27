import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { UserProvider } from "./users/UserProvider"
import { UserList } from "./users/UserList"
import { MessageProvider } from "./messages/MessageProvider"
import { MessageList } from "./messages/MessageList"
import { ServiceForm } from "./services/ServiceForm"
import { ServiceList } from "./services/ServiceList"
import { ServiceProvider } from "./services/ServiceProvider"
import { TagProvider } from "./tags/TagProvider"


export const ApplicationViews = () => {
    return (
        <>

            <Route exact path="/">
                <Home />
            </Route>

            <UserProvider>
                <Route exact path="/users">
                    <UserList />
                </Route>
            </UserProvider>

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

        </>
    )
}