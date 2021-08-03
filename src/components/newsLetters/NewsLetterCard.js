  import React, { useContext }from "react"
  import { NewsTagContext } from "../tags/NewsTagProvider"
  import "../newsLetters/NewsLetter.css"


  export const NewsCard = ({ news }) => {
  const { addNewsTag } = useContext(NewsTagContext)
  const currentUserId = parseInt(sessionStorage.getItem("App_user"))
  
  const handleRelease = (event) => {
    addNewsTag({
        userId: currentUserId,
        newsLetterId: parseInt(event.target.id),
    })
    }
    
    
  return   (
      <section className="news" id="eventId">
          <h3 className="eventTitle">{news.title}</h3>
          <div className="eventDate">{news.date}</div>
          <div className="eventTextArea">{news.textArea}</div>

      
          <button id={news.id} onClick={handleRelease}>Mark Seen</button>
      </section>
   )
  }