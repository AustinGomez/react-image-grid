import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import useWindowSize from '../hooks/UseWindowSize'
import Lightbox from './Lightbox'
import './Grid.css'

const Grid = React.forwardRef(({ images, rowHeight, padding = 0 }, ref) => {
    let windowSize = useWindowSize()
    const [minAspectRatio, setMinAspectRatio] = useState()
    const [rows, setRows] = useState([])
    const [showLightbox, setShowLightbox] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState()



    // We'll use this value to calculate how many pictures we need in a row.
    // The "min" aspect ratio is the aspect ratio that will allow the row to
    // span the correct length while being between minRowHeight and maxRowHeight
    const calcMinAspectRatio = useCallback(() => {
        return (ref.current.parentNode.clientWidth) / rowHeight
    }, [rowHeight, ref])

    const handleImageClick = (e) => {
        setSelectedIndex(e.target.getAttribute('data-index'))
        setShowLightbox(true)
    }

    // Creates <img/> tags from image and row metadata.
    // 
    const imageDataToImgTag = useCallback((image, totalIndex, rowIndex, row, width) => {
        const calculatedRowHeight = ref.current.parentNode.clientWidth / width

        // Calculate the dimensions and padding of each image. This needs
        // to be inline since we need some values from the JS.
        let imageStyle = {
            height: calculatedRowHeight + "px",

            // Take back out the padding from the ratio.
            width: calculatedRowHeight * image[1] - padding + "px",

            // Don't add padding to the last item in a row
            paddingRight: rowIndex === row.length - 1 ? 0 : padding + "px"
        }
        return <img
            className="grid-img"
            style={imageStyle}
            data-index={totalIndex}
            onClick={handleImageClick}
            src={image[0].download_url}
            alt={image[0].alt}
            key={"img_" + image[0].id + "_" + image[1]} />
    }, [ref, padding])


    // Build the rows of the grid. Each row must have an aspect ratio of at least minAspectRatio.
    // Then, each image in the row is scaled up to fill the desired width of the row, while maintaining
    // the aspect ratio of each photo in the row.
    const makeRows = useCallback(() => {
        let allRows = []
        let row = []
        let width = 0
        for (let i = 0; i < images.length; i++) {
            let image = images[i]

            // Add the padding into the ratio.
            let ratio = image.width / image.height

            // If we're less than the min aspectRatio then keep adding more items to the row.
            if (width <= minAspectRatio && i !== images.length - 1) {
                // Add the ratio contributed by the padding.
                ratio += padding / image.height
                row.push([image, ratio])
                width += ratio
            }
            else {
                if (i === images.length - 1) {
                    row.push([image, ratio])
                    width += ratio
                }
                let imageElements = []
                for (let j = 0; j < row.length; j++) {
                    imageElements.push(imageDataToImgTag(row[j], i - row.length + j, j, row, width))
                }
                // Add the finished row to the list of all rows.
                allRows.push(imageElements)

                // Start a new row with the current image as the first image
                row = [[image, ratio]]
                width = ratio
            }
        }

        // This style also needs to be inline since we use the padding prop.
        // (Would be nice to use something like styled-components for this instead)
        const divStyle = {
            display: "flex",
            paddingBottom: padding + "px"
        }
        setRows(allRows.map((row, index) => <div className="grid-row" style={divStyle} key={"row_" + index}>{row}</div>))
    }, [images, padding, minAspectRatio, imageDataToImgTag])

    // Recalculate min aspect ratio when the window size changes.
    useEffect(() => {
        setMinAspectRatio(calcMinAspectRatio())
    }, [calcMinAspectRatio, windowSize])

    // This isn't optimal. Ideally we don't want to call makeRows every time the aspect ratio changes.
    // There should be a resizeRows method that just goes through each row and recalculates and resizes
    // each row/image.
    useEffect(() => {
        if (minAspectRatio) {
            makeRows()
        }
    }, [minAspectRatio, makeRows])

    return (
        <div>
            <div className="grid-container" ref={ref}>
                {rows}
            </div>
            {showLightbox ?
                <Lightbox
                    selectedImage={images[selectedIndex]}
                    nextImage={images[(selectedIndex + 1) % images.length]}
                    prevImage={images[(selectedIndex + images.length - 1) % images.length]}
                    onClose={() => setShowLightbox(false)}
                    onPrev={() => setSelectedIndex(selectedIndex => (selectedIndex + images.length - 1) % images.length)}
                    onNext={() => setSelectedIndex(selectedIndex => (selectedIndex + 1) % images.length)} />
                : null
            }
        </div>
    )
})

Grid.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            download_url: PropTypes.string.isRequired,
            height: PropTypes.number.isRequired,
            width: PropTypes.number.isRequired
        })).isRequired,
    rowHeight: PropTypes.number.isRequired,
    padding: PropTypes.number
}

export default Grid