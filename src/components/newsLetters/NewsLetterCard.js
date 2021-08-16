  import React from "react"
  import "../newsLetters/NewsLetter.css"


  export const NewsCard = ({ news }) => {

    
  return   (
      <section className="news" id="newsId">
          <h3 className="newsTitle">{news.title}</h3>
          <div className="eventDate">{news.date}</div>
          <div className="eventTextArea">{news.textArea}</div>

      
      </section>
   )
  }