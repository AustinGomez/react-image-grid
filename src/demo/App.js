import React, { useState } from "react";
import useWindowSize from "../lib/hooks/UseWindowSize";
import "./App.css";
import Grid from "../lib/components/Grid";

function App() {
  let windowSize = useWindowSize();
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
  return (
    <div className="App">
      <Grid
        images={images}
        rowHeight={200}
        margin={5}
        width={Math.floor(windowSize.innerWidth * 0.8)}
      />
    </div>
  );
}

export default App;
