// import React, { useContext, useEffect } from "react"
// import { ServiceInfoContext } from "./ServiceInfoProvider"
// import { ServiceInfoCard } from "./ServiceCard"
// import "./Service.css"

// export const ServiceList = () => {
//     const { getServicesInfo } = useContext(ServiceInfoContext)
//     const { getUsers } = useContext(UsersContext)
//     const { getTags, tags } = useContext(TagContext)

//     let user = parseInt(sessionStorage.getItem("App_user"))
//     let foundTags = tags.filter(tag => (tag.userId === user)) 
    

//     useEffect(() => {
//         getUsers()
//         .then(getTags())
//         .then(getServicesInfo())
//     }, [])


//     return (
//         <>
//             <h2>Service Board</h2>
//             <div className="services">
//                 {foundTags.map(serviceInfo => {
//                     return <ServiceInfoCard key={serviceInfo.serviceInfo.id} serviceInfo={serviceInfo.serviceInfo} />
//                 })}
//             </div>
//             <div>
               
//             </div>
//         </>
//     )
// }    