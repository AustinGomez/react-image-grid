# React Image Grid

React Image Grid is an image grid component based on Google Photos. It will display a grid of photos, with customizeable row height and padding. The grid will adapt to fit it's parent container. This component also makes use of React hooks.

![Image of react-image-grid](https://i.imgur.com/KzZEowS.jpg)

This is very barebones for now. More to come. (Demo images courtesy of Unsplash and picsum.photos)

## Installation
Simply:

    yarn add react-photo-grid

## Usage
See the src/demo for usage. You'll need the direct URLs to your photos, as well as the height and width of your images in pixels.

## Project Roadmap
- #### Performance
    - Implement lazy loading of photos (only in viewport images loaded)
    - Proper sized thumbnails
    - Support multiple image sizes for different devices
    - Increase initial scroll and render speed
- #### Features
    - Drag and drop images
    - Make images selectable


## Notes
Project scaffolding from https://github.com/DimiMikadze/create-react-library. Minimum aspect ratio idea from https://github.com/schlosser/pig.js.

Heavy inspiration from Google Photos as well!