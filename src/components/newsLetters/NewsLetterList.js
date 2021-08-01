import React, { useContext, useEffect } from "react"
import { NewsContext } from "../newsLetters/NewsLetterProvider"
import { NewsCard } from "./NewsLetterCard"
import "../newsLetters/NewsLetter.css"

export const NewsList = () => {

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
          
          return <NewsCard key={news.id}
                      news={news} />
        })
      }
    </div>
   </> 
  )
}