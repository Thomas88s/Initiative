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
import { AdminEventList } from "./admin/adminEvents/AdminEventList"
import { AdminEventForm } from "./admin/adminEvents/AdminEventForm"
import { AdminNewsList } from "./admin/adminNewsLetters/AdminNewsList"
import { AdminNewsForm } from "./admin/adminNewsLetters/AdminNewsForm"
import { NewsLetterProvider } from "./newsLetters/NewsLetterProvider"
import { EventList } from "./events/EventList"
import { EventProvider } from "./events/EventProvider"
import { MessageProvider } from "./messages/MessageProvider"
import { MessageForm } from "./messages/MessageForm"
import { ServiceForm } from "./services/ServiceForm"
import { ServiceList } from "./services/ServiceList"
import { ServiceProvider } from "./services/ServiceProvider"
import { TagProvider } from "./tags/TagProvider"
import { EventTagProvider } from "./tags/EventTagProvider"
import { UserServiceList } from "./users/UserServices"
import { UserEventList } from "./users/UserEvents"
import { UserProfileServiceList } from "./users/UserProfileServices"
import { UserSentMessageList } from "./users/UserSentMessageList"
import { UserReceivedMessageList } from "./users/UserReceivedMessageList"
import { UserProfileEventList } from "./users/UserProfileEvents"





export const ApplicationViews = () => {
    return (
        <>

            <Route exact path="/">
                <Home />
            </Route>
            <ServiceProvider>
                <MessageProvider>
                    <EventProvider>
                        <TagProvider>
                            <EventTagProvider>
                                <UserProvider>
                                    <Route exact path="/users">
                                        <UserProfile />
                                        <UserProfileServiceList />
                                        <UserReceivedMessageList />
                                        <UserProfileEventList />
                                    </Route>
                                </UserProvider>
                            </EventTagProvider>
                        </TagProvider>
                    </EventProvider>
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
                    </UserProvider>
                </TagProvider>
            </ServiceProvider>

                        <Route exact path="/news">
                        </Route>

            <EventProvider>
                <EventTagProvider>
                    <UserProvider>
                            <Route exact path="/events">
                                <EventList />
                                <UserEventList />
                            </Route>
                    </UserProvider>
                </EventTagProvider>
            </EventProvider>            

            <UserProvider>
                <ServiceProvider>
                    <MessageProvider>
                        <Route exact path="/admin7HmKXhQsrnTpYflD">
                            <AdminUserList />
                             <AdminHomeReceivedMessageList />
                             <AdminHomeSentMessageList />
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
                            <AdminServiceForm />
                            <AdminServiceList />
                        </Route>
                        <Route path="/admin/services/create">
                            <ServiceForm />
                        </Route>
                        <Route path="/services/edit/:serviceId(\d+)">
                            <ServiceForm />
                        </Route>
                    </UserProvider>
                </TagProvider>
            </ServiceProvider>

            <EventProvider>
                        <Route exact path="/admin/eventsrs77fUxqPmQtJEdz">
                            <AdminEventList />
                            <AdminEventForm />
                        </Route>
                        <Route path="/events/create">
                            <AdminEventForm />
                        </Route>
                        <Route path="/events/edit/:eventId(\d+)">
                            <AdminEventForm />
                        </Route>
            </EventProvider>
            
            <NewsLetterProvider>
                        <Route exact path="/admin/newsLettersBctGSb59aC7uZPQW">
                            <AdminNewsList />
                            <AdminNewsForm />
                        </Route>
                        <Route path="/newsLetters/create">
                            <AdminNewsForm />
                        </Route>
                        <Route path="/newsLetters/edit/:newsId(\d+)">
                            <AdminNewsForm />
                        </Route>
            </NewsLetterProvider>
        </>
    )
}