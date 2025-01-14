import React from 'react'

export default function Result({ animal, handleClickEntry }) {
    return (
        <li 
            onClick={(e) => {
                if (handleClickEntry) {
                    handleClickEntry(animal)
                }
            }}
            className="result">
            <a href={animal.url} className="url">{animal.url}</a>
            <div className="title">{animal.name}</div>
            <div className="description">{animal.description}</div>
        </li>
    )
}
