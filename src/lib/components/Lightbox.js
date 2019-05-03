import React, { useEffect } from 'react'
import './Lightbox.css'

const Lightbox = ({ selectedImage, nextImage, prevImage, onNext, onPrev, onClose }) => {

    const handleClickOutside = (e) => {
        // Only close if they click the backdrop.
        if (e.target.getAttribute('class') === 'backdrop') {
            onClose()
        }
    }

    useEffect(() => {
        console.log(selectedImage, nextImage, prevImage)
    }, [])

    return (
        <>
        <div className="backdrop" onClick={handleClickOutside}></div>
            <div className="lightbox-window">
                <div className="lightbox-header">
                    <div>Some text</div>
                    <span className="close-modal-btn" onClick={onClose}>&times;</span>
                </div>
                <div className="lightbox-body">
                    <img src={selectedImage.download_url} ></img>
                </div>
                <div className="lightbox-footer">
                    <button className="btn-cancel" onClick={onClose}>CLOSE</button>
                </div>
            </div>
        </>
    )
}

export default Lightbox