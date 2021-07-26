import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { UserProvider } from "./users/UserProvider"
import { UserList } from "./users/UserList"
import { MessageProvider } from "./messages/MessageProvider"
import { MessageList } from "./messages/MessageList"


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

        </>
    )
}