import React, { useState, createContext } from "react"
import { apiUrl } from "../../index.js"

export const TagContext = createContext()

export const TagProvider = (props) => {
    const [tags, setTags] = useState([])

    const getTags = () => {
        return fetch(`${apiUrl}tags?_expand=service`)
            .then(res => res.json())
            .then(setTags)
    }

    const getTagById = (id) => {
        return fetch(`${apiUrl}tags/${id}`)
            .then(res => res.json())
    }

    const addTag = tagObj => {
        return fetch(`${apiUrl}tags`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tagObj)
        })
            .then(getTags)
    }

    const deleteTag = tagId => {
        return fetch(`${apiUrl}tags/${tagId}`, {
            method: "DELETE"
        })
            .then(getTags)
    }

    return (
        <TagContext.Provider value={{
            tags, getTags, getTagById, addTag, deleteTag, 
        }}>
            {props.children}
        </TagContext.Provider>
    )
}