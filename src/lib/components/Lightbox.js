import React, { useState, useEffect } from 'react'
import './Lightbox.css'

const Lightbox = ({ selectedSrc, nextSrc, prevSrc, onNext, onPrev, onClose }) => {

    useEffect(() => {
        console.log(selectedSrc, nextSrc, prevSrc)
    })

    return (
        <div>
            <div onClick={onClose}>
                CLOSE
                </div>

            <div onClick={onNext}>
                NEXT
        </div>
            <div onClick={onPrev}>
                PREV
            </div>
        </div>
    )
}

export default Lightbox