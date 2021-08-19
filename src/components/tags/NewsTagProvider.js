import React, { useState, createContext } from "react"
import { apiUrl } from "../../index.js"

export const NewsTagContext = createContext()

export const NewsTagProvider = (props) => {
    const [newsTags, setNewsTags] = useState([])

    const getNewsTags = () => {
        return fetch(`${apiUrl}newsTags?_expand=newsLetter`)
            .then(res => res.json())
            .then(setNewsTags)
    }

    const getNewsTagById = (id) => {
        return fetch(`${apiUrl}newsTags/${id}`)
            .then(res => res.json())
    }

    const addNewsTag = newsTagObj => {
        return fetch(`${apiUrl}newsTags`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newsTagObj)
        })
            .then(getNewsTags)
    }

    const deleteNewsTag = eventTagId => {
        return fetch(`${apiUrl}newsTags/${eventTagId}`, {
            method: "DELETE"
        })
            .then(getNewsTags)
    }

    return (
        <NewsTagContext.Provider value={{
            newsTags, getNewsTags, getNewsTagById, addNewsTag, deleteNewsTag, 
        }}>
            {props.children}
        </NewsTagContext.Provider>
    )
}