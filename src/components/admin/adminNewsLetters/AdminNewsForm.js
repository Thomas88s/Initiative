import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { NewsContext } from "../../newsLetters/NewsLetterProvider"
import "../../newsLetters/NewsLetter.css"

export const AdminNewsForm = () => {
    const { addNews, getNewsById, getNews, editNews } = useContext(NewsContext)
    const [news, setNews] = useState({

        title: "",
        date: "",
        textArea: "",
    });

    useEffect(() => {
      getNews()
  }, [])


    const [isLoading, setIsLoading] = useState(true);
    const { newsId } = useParams();
    const history = useHistory();
 

      const handleControlledInputChange = (controlEvent) => {
        const newNews = { ...news }
        let selectedVal = controlEvent.target.value
        
         if (controlEvent.target.id.includes("Id")) {
          selectedVal = parseInt(selectedVal)
         }
          newNews[controlEvent.target.id] = selectedVal
          setNews(newNews)
        }
  
      const handleClickSave = (controlEvent) => {
        controlEvent.preventDefault() 
        if (news.title === "") {
            window.alert("Please select a location")
        } else {
          setIsLoading(true);
        } if  (newsId){
            editNews({
                id: newsId,
                title: news.title,
                date: news.date,
                textArea: news.textArea
                
            })
            .then(() => history.push("/admin/newsLettersBctGSb59aC7uZPQW"))
          } else {
           
            addNews({
                title: news.title,
                date: news.date,
                textArea: news.textArea})
                .then(() => setNews({   title: "",
                date: "",
                textArea: "" })) 
          }
        }
      
        useEffect(() => {
          getNews().then(() => {
            if (newsId) {
              getNewsById(newsId)
              .then(news => {
                  setNews(news)
                  setIsLoading(false)
              })
            } else {
              setIsLoading(false)
            }
          })
        }, [])
     
  

    return (
        <form className="eventForm">
            <h2 className="eventFormTitle">NewsLetter</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Article title:</label>
                    <input type="text" id="title" 
                    onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Please enter title" value={news.title}/>
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" value={news.date} />
                </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
                    <label htmlFor="textArea">Body:</label>
                    <input type="text" id="textArea" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Please enter text here..." value={news.textArea}/>
                </div>
          </fieldset>
            <button className="btn btn-primary"
             disabled={isLoading}
            onClick={handleClickSave}> 
            Save
          </button>
      </form>
    )
    }


    
