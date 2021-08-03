import React, { useContext, useEffect } from "react"
import { NewsContext } from "../newsLetters/NewsLetterProvider"
import { NewsCard } from "./NewsLetterCard"
import { NewsTagContext } from "../tags/NewsTagProvider"
import "../users/User.css"

export const NewsList = () => {
const currentUserId = parseInt(sessionStorage.getItem("App_user"))
const { news, getNews } = useContext(NewsContext)    
const { newsTags } = useContext(NewsTagContext)   
const foundTags = newsTags.filter(tag => tag.userId === currentUserId )
const newsList = news.filter(n => n.id !== foundTags.newsId)


useEffect(() => {
    getNews()
    console.log(newsList)
  }, [])


  
  
  return (
     <>
    <div className="userNews">
      <h3>News Letters</h3>
     
      {
        news.map(news => {
          
          return <NewsCard key={news.id}
                      news={news} />
        })
      }
    </div>
   </> 
  )
}