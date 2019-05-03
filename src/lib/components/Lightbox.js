import React, { useEffect, useCallback, useMemo } from 'react'
import './Lightbox.css'
import useKeyUp from '../hooks/UseKeyUp'

const Lightbox = ({ selectedImage, nextImage, prevImage, onNext, onPrev, onClose }) => {
    const keyUp = useKeyUp()
    
    const handleClickOutside = (e) => {
        // Only close if the user clicks the backdrop.
        if (e.target.getAttribute('class') === 'backdrop') {
            onClose()
        }
    }

    useEffect(() => {
        switch (keyUp) {
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
        }
    }, [keyUp])

    return (
        <>
            <div className="backdrop" onClick={handleClickOutside}></div>
            <div className="lightbox-window">
                <div className="lightbox-header">
                    <div>Some text</div>
                    <span className="close-modal-btn" onClick={onClose}>&times;</span>
                </div>
                <div className="lightbox-body">
                    <img src={selectedImage.download_url} alt={selectedImage.alt}></img>
                </div>
                <div className="lightbox-footer">
                    <button className="btn-cancel" onClick={onClose}>CLOSE</button>
                </div>
            </div>
        </>
    )
}

export default Lightbox