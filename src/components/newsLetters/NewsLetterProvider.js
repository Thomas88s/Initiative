import React, { useState, createContext } from "react"
import { apiUrl } from "../../index.js"

export const NewsContext = createContext()

export const NewsLetterProvider = (props) => {
    const [news, setNews] = useState([])

    const getNews = () => {
        return fetch(`${apiUrl}newsLetters`)
            .then(res => res.json())
            .then(setNews)
    }

    const getNewsById = (id) => {
        return fetch(`${apiUrl}newsLetters/${id}`)
            .then(res => res.json())
    }

    const addNews = newsObj => {
        return fetch(`${apiUrl}newsLetters`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newsObj)
        })
            .then(getNews)
    }

    const deleteNews = newsId => {
        return fetch(`${apiUrl}newsLetters/${newsId}`, {
            method: "DELETE"
        })
            .then(getNews)
    }

    const editNews = news => {
        return fetch(`${apiUrl}newsLetters/${news.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(news)
        })
            .then(getNews)
    }

    return (
        <NewsContext.Provider value={{
            news, getNews, getNewsById, addNews, deleteNews, editNews
        }}>
            {props.children}
        </NewsContext.Provider>
    )
}