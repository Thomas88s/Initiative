  import React, { useContext }from "react"
  import { NewsContext } from "../newsLetters/NewsLetterProvider"
  import "../newsLetters/NewsLetter.css"


  export const NewsCard = ({ news }) => {
  const { deleteNews } = useContext(NewsContext)
  
  const handleRelease = () => {
      deleteNews(news.id)
    }
    
    
  return   (
      <section className="news" id="eventId">
          <h3 className="eventTitle">{news.title}</h3>
          <div className="eventDate">{news.date}</div>
          <div className="eventTextArea">{news.textArea}</div>

      
          <button onClick={handleRelease}>Mark Seen</button>
      </section>
   )
  }