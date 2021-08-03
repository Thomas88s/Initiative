  import React, { useContext, useState }from "react"
  import { NewsTagContext } from "../tags/NewsTagProvider"
  import "../newsLetters/NewsLetter.css"

  
  export const NewsCard = ({ news }) => {
      const { addNewsTag, newsTags } = useContext(NewsTagContext)
      const currentUserId = parseInt(sessionStorage.getItem("App_user"))
      
      const [newsTag, setNewsTag] = useState({
        userId: currentUserId,
        newsLetterId: news.id
    })

      const handleRelease = (event) => {
    const newNewsTag = { ...newsTag }
    newNewsTag[event.target.id] = event.target.value
    newNewsTag.newsLetterId = news.id
    let newsLetterId = newsTag.newsLetterId
    let userId = currentUserId
    const foundNewsTag = newsTags.find(newsTag => newsLetterId === newsTag.newsLetterId && userId === newsTag.userId)
    if (foundNewsTag) {
       alert("already selected")
    } else {
        setNewsTag(newNewsTag)
    addNewsTag(newsTag)
    }
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