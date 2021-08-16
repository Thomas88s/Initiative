  import React, { useContext }from "react"
  import { NewsContext } from "../../newsLetters/NewsLetterProvider"
  import { useHistory } from "react-router-dom"
  import "../../newsLetters/NewsLetter.css"


  export const AdminNewsCard = ({ news }) => {
  const { deleteNews } = useContext(NewsContext)
  
  
  const history = useHistory()

  const handleRelease = () => {
      deleteNews(news.id)
    }
    
    
  return   (
      <section className="news" id="eventId">
          <h3 className="newsTitle">{news.title}</h3>
          <div className="eventDate">{news.date}</div>
          <div className="eventTextArea">{news.textArea}</div>

          <button className="newsButton" onClick={() => {
               history.push(`/newsLetters/edit/${news.id}`)
           }}>Edit Article</button>
          <button className="newsButton" onClick={handleRelease}>Delete Article</button>
      </section>
   )
  }