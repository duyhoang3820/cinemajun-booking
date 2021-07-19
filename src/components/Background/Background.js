import React from 'react'
import './Background.css'

export default function Background() {
    return (
        <div>
            <div className="bg"></div>
            <div className="star-field">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>
        </div>
    )
}
