import React, { useState, createContext } from "react"

export const NewsTagContext = createContext()

export const NewsTagProvider = (props) => {
    const [newsTags, setNewsTags] = useState([])

    const getNewsTags = () => {
        return fetch("http://localhost:8088/newsTags?_expand=newsLetter")
            .then(res => res.json())
            .then(setNewsTags)
    }

    const getNewsTagById = (id) => {
        return fetch(`http://localhost:8088/newsTags/${id}`)
            .then(res => res.json())
    }

    const addNewsTag = newsTagObj => {
        return fetch("http://localhost:8088/newsTags", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newsTagObj)
        })
            .then(getNewsTags)
    }

    const deleteNewsTag = eventTagId => {
        return fetch(`http://localhost:8088/newsTags/${eventTagId}`, {
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