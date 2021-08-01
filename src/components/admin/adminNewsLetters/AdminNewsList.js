import React, { useContext, useEffect } from "react"
import { NewsContext } from "../../newsLetters/NewsLetterProvider"
import { AdminNewsCard } from "./AdminNewsCard"
import "../../newsLetters/NewsLetter.css"

export const AdminNewsList = () => {

const { news, getNews } = useContext(NewsContext)    

useEffect(() => {
    getNews()
  }, [])

  return (
     <>
    <div className="news">
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