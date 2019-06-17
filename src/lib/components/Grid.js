import React, { useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import Lightbox from "./Lightbox";
import "./Grid.css";

const Grid = ({ images, rowHeight, margin = 0, width }) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();

  const handleImageClick = e => {
    setSelectedIndex(e.target.getAttribute("data-index"));
    setShowLightbox(true);
  };

  // Creates <img/> tags from image and row metadata.
  //
  const imageDataToImgTag = useCallback(
    (image, totalIndex, rowIndex, row, imageWidth) => {
      const calculatedRowHeight = width / imageWidth;

      // Calculate the dimensions and margin of each image. This needs
      // to be inline since we need some values from the JS.
      let imageStyle = {
        height: calculatedRowHeight + "px",

        // Take back out the margin from the ratio.
        width: calculatedRowHeight * image[1] - margin + "px",

        // Don't add margin to the last item in a row
        marginRight: rowIndex === row.length - 1 ? 0 : margin + "px"
      };
      return (
        <img
          className="grid-img"
          style={imageStyle}
          data-index={totalIndex}
          onClick={handleImageClick}
          src={image[0].src}
          alt={image[0].alt}
          key={"img_" + image[0].id + "_" + image[1]}
        />
      );
    },
    [margin, width]
  );

  // Build the rows of the grid. Each row must have an aspect ratio of at least minAspectRatio.
  // Then, each image in the row is scaled up to fill the desired width of the row, while maintaining
  // the aspect ratio of each photo in the row.
  const rows = useMemo(() => {
    let allRows = [];
    let row = [];
    let widthSoFar = 0;

    // We'll use this value to calculate how many pictures we need in a row.
    // The "min" aspect ratio is the aspect ratio that will allow the row to
    // span the correct length while being between minRowHeight and maxRowHeight
    const minAspectRatio = width / rowHeight;

    for (let i = 0; i < images.length; i++) {
      let image = images[i];

      // Add the margin into the ratio.
      let ratio = image.width / image.height;

      // If we're less than the min aspectRatio then keep adding more items to the row.
      if (widthSoFar <= minAspectRatio && i !== images.length - 1) {
        // Add the ratio contributed by the margin.
        ratio += margin / image.height;
        row.push([image, ratio]);
        widthSoFar += ratio;
      } else {
        if (i === images.length - 1) {
          row.push([image, ratio]);
          widthSoFar += ratio;
        }
        let imageElements = [];
        for (let j = 0; j < row.length; j++) {
          imageElements.push(
            imageDataToImgTag(row[j], i - row.length + j, j, row, widthSoFar)
          );
        }
        // Add the finished row to the list of all rows.
        allRows.push(imageElements);

        // Start a new row with the current image as the first image
        row = [[image, ratio]];
        widthSoFar = ratio;
      }
    }

    // This style also needs to be inline since we use the padding prop.
    // (Would be nice to use something like styled-components for this instead)
    const divStyle = {
      display: "flex",
      marginBottom: margin + "px"
    };
    return allRows.map((row, index) => (
      <div className="grid-row" style={divStyle} key={"row_" + index}>
        {row}
      </div>
    ));
  }, [width, imageDataToImgTag, images, margin, rowHeight]);

  const handleClose = useCallback(() => {
    setShowLightbox(false);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex(
      selectedIndex => (+selectedIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex(selectedIndex => (+selectedIndex + 1) % images.length);
  }, [images.length]);

  return (
    <>
      <div className="grid-container">{rows}</div>
      {showLightbox ? (
        <Lightbox
          selectedImage={images[selectedIndex]}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      ) : null}
    </>
  );
};

Grid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired
    })
  ).isRequired,
  rowHeight: PropTypes.number.isRequired,
  margin: PropTypes.number
};

export default Grid;
