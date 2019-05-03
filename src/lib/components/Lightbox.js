import React, { useEffect } from 'react'
import './Lightbox.css'

const Lightbox = ({ selectedImage, onNext, onPrev, onClose }) => {
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
                <div className="back-button"></div>
                <div className="lightbox-image-container">
                    <div className="left-arrow"></div>
                    <img id="lightbox-image" src={selectedImage.download_url} alt={selectedImage.alt} />
                    <div className="right-arrow"></div>
                </div>
            </div>
        </>
    )
}

export default Lightbox