import React, { useState, createContext } from "react"

export const TagContext = createContext()

export const TagProvider = (props) => {
    const [tags, setTags] = useState([])

    const getTags = () => {
        return fetch("http://localhost:8088/tags")
            .then(res => res.json())
            .then(setTags)
    }

    const getTagById = (id) => {
        return fetch(`http://localhost:8088/tags/${id}`)
            .then(res => res.json())
    }

    const addTag = tagObj => {
        return fetch("http://localhost:8088/tags", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tagObj)
        })
            .then(getTags)
    }

    const deleteTag = tagId => {
        return fetch(`http://localhost:8088/tags/${tagId}`, {
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