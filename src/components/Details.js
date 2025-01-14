import React from 'react'

export default function Details({ selectedEntry }) {
    return (
        <div className="details result">
            <img src={selectedEntry.image} alt="" />
            <a href={selectedEntry.url} className="url">{selectedEntry.url}</a>
            <div className="title grey">{selectedEntry.name}</div>
            <div className="description">{selectedEntry.description}</div>
        </div>
    )
}
