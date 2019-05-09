import React, { useState } from "react";
import "./App.css";
import Grid from "../lib/components/Grid";

function App() {
  let generatedImages = Array(20)
    .fill(1)
    .map(() => {
      const height = Math.floor(Math.random() * (600 - 300) + 300);
      const width = Math.floor(Math.random() * (700 - 200) + 200);
      return {
        src: `https://via.placeholder.com/${width}x${height}`,
        width: width * 10,
        height: height * 10
      };
    });
  const [images] = useState(generatedImages);

  const ref = React.createRef();
  return (
    <div className="App">
      <Grid images={images} rowHeight={200} ref={ref} margin={5} />
    </div>
  );
}

export default App;
