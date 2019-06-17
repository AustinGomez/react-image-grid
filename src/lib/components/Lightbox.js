import React, { useState, useEffect, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import "./Lightbox.css";

const Lightbox = ({ selectedImage, onNext, onPrev, onClose }) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => onNext(),
    onSwipedRight: () => onPrev(),
    onSwipedDown: e => onClose(),
    trackMouse: true,
    trackTouch: true,
    preventDefaultTouchmoveEvent: true
  });

  const handleKeyPress = useCallback(
    e => {
      switch (e.code) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          onNext();
          break;
        case "ArrowLeft":
          onPrev();
          break;
        default:
          break;
      }
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener("keyup", handleKeyPress);
    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <>
      <div className="lightbox-backdrop" onClick={onClose} />
      <div className="lightbox-window">
        <div className="lightbox-header-shadow">
          <img
            className="back-button"
            src="icons/left-arrow.svg"
            alt="back-button-icon"
            onClick={onClose}
          />
        </div>
        <div {...swipeHandlers} className="lightbox-image-container">
          <div
            className="arrow-container left-arrow"
            onClick={onPrev}
            onMouseEnter={() => setShowLeftArrow(true)}
            onMouseLeave={() => setShowLeftArrow(false)}
          >
            {showLeftArrow ? (
              <img src="icons/chevron-left.svg" alt="left arrow icon" />
            ) : null}
          </div>
          <img
            id="lightbox-image"
            src={selectedImage.src}
            alt={selectedImage.alt}
          />
          <div
            className="arrow-container right-arrow"
            onClick={onNext}
            onMouseEnter={() => setShowRightArrow(true)}
            onMouseLeave={() => setShowRightArrow(false)}
          >
            {showRightArrow ? (
              <img src="icons/chevron-right.svg" alt="right arrow icon" />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lightbox;
