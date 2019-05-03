import React, { useState, useEffect } from 'react'
import './Lightbox.css'

const Lightbox = ({ selectedImage, onNext, onPrev, onClose }) => {
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(false)

    const handleKeyPress = (e) => {
        switch (e.code) {
            case 'Escape':
                onClose()
                break
            case 'ArrowRight':
                onNext()
                break
            case 'ArrowLeft':
                onPrev()
                break
            default:
                break
        }
    }

    useEffect(() => {
        window.addEventListener('keyup', handleKeyPress)
        return (() => {
            window.removeEventListener('keyup', handleKeyPress)
        })
    }, [])

    return (
        <>
            <div className="lightbox-backdrop" onClick={onClose}></div>
            <div className="lightbox-window">
                <div className="lightbox-header-shadow">
                    <img className="back-button" src="icons/left-arrow.svg" onClick={onClose} />
                </div>
                <div className="lightbox-image-container">
                    <div
                        className="arrow-container left-arrow"
                        onClick={onPrev}
                        onMouseEnter={() => setShowLeftArrow(true)}
                        onMouseLeave={() => setShowLeftArrow(false)}>
                        {showLeftArrow ? <img src="icons/chevron-left.svg" /> : null}
                    </div>
                    <img id="lightbox-image" src={selectedImage.download_url} alt={selectedImage.alt} />
                    <div className="arrow-container right-arrow"
                        onClick={onNext}
                        onMouseEnter={() => setShowRightArrow(true)}
                        onMouseLeave={() => setShowRightArrow(false)}>
                        {showRightArrow ? <img src="icons/chevron-right.svg" /> : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lightbox