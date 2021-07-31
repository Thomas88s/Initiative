import React, { useState, createContext } from "react"

export const NewsLetterContext = createContext()

export const ServiceProvider = (props) => {
    const [newsLetters, setNewsLetters] = useState([])

    const getNewsletter = () => {
        return fetch("http://localhost:8088/newsLetters")
            .then(res => res.json())
            .then(setNewsLetters)
    }

    const getNewsLetterById = (id) => {
        return fetch(`http://localhost:8088/newsLetters/${id}`)
            .then(res => res.json())
    }

    const addNewsLetter = serviceObj => {
        return fetch("http://localhost:8088/newsLetters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(serviceObj)
        })
            .then(getNewsletter)
    }

    const deleteNewsLetter = newsLetterId => {
        return fetch(`http://localhost:8088/newsLetters/${newsLetterId}`, {
            method: "DELETE"
        })
            .then(getNewsletter)
    }

    const editNewsLetter = newsLetter => {
        return fetch(`http://localhost:8088/newsLetters/${newsLetter.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newsLetter)
        })
            .then(getNewsletter)
    }

    return (
        <NewsLetterContext.Provider value={{
            newsLetters, getNewsletter, getNewsLetterById, addNewsLetter, deleteNewsLetter, editNewsLetter
        }}>
            {props.children}
        </NewsLetterContext.Provider>
    )
}