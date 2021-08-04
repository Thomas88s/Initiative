import React, { useContext, useEffect } from "react"
import { NewsContext } from "../../newsLetters/NewsLetterProvider"
import { AdminNewsCard } from "./AdminNewsCard"
// import { NewsTagContext } from "../../tags/NewsTagProvider"
import "./AdminNewsLetters.css"

export const AdminNewsList = () => {
// const currentUserId = parseInt(sessionStorage.getItem("App_user"))
const { news, getNews } = useContext(NewsContext)
// const { newsTags, getNewsTags } = useContext(NewsTagContext)   
// const newsToMap = newsTags.find(tag => tag.userId === currentUserId )

useEffect(() => {
    getNews()
    // .then(getNewsTags())
    // .then(console.log(newsToMap))
  }, [])


  return (
     <>
    <div className="adminNewsList">
      <h3>News Letters</h3>
      {
        news.map(news => {
          
          return <AdminNewsCard key={news.id}
                      news={news} />
        })
      }
    </div>
   </> 
  )
}