import React, { useContext, useEffect } from "react"
import { NewsContext } from "../../newsLetters/NewsLetterProvider"
import { AdminNewsCard } from "./AdminNewsCard"
import "./AdminNewsLetters.css"

export const AdminNewsList = () => {

const { news, getNews } = useContext(NewsContext)

useEffect(() => {
    getNews()
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