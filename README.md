
# React Image Grid

[![Build Status](https://travis-ci.com/AustinGomez/react-image-grid.svg?branch=master)](https://travis-ci.com/AustinGomez/react-image-grid) [![Coverage Status](https://coveralls.io/repos/github/AustinGomez/react-image-grid/badge.svg?branch=master)](https://coveralls.io/github/AustinGomez/react-image-grid?branch=master)

React Image Grid is an image grid component based on Google Photos. It will display a grid of photos, with customizeable row height and margins. The grid will adapt to fit it's parent container, and will resize rows according to screen size.

![Image of react-image-grid](https://i.imgur.com/KzZEowS.jpg)

## New! Image lightbox
You can now click on a photo and view your grid as a gallery. Navigate using the arrow keys or the on screen arrows. Currently does not support swipe gestures for mobile.

![Gif of lightbox](https://media.giphy.com/media/5eFuUP0hWfPRd6Yxpo/giphy.gif)

## Installation
Install via npm or yarn:

    yarn add react-responsive-image-grid
or

    npm install react-responsive-image-grid

## Usage
See the src/demo for usage. You'll need the direct URLs to your photos, as well as the height and width of your images in pixels.

## Project Roadmap
- Performance
    - Implement lazy loading of photos (only in viewport images loaded)
    - Support multiple image sizes for different devices
    - Increase initial scroll and render speed
- Features
    - Drag and drop images
    - Make images selectable

