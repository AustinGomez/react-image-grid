import React, { useState } from 'react'
import './App.css'
import Grid from '../lib/components/Grid'

function App() {
  const [images] = useState(
    [
      {
        "id": "0",
        "author": "Alejandro Escamilla",
        "width": 5616,
        "height": 3744,
        "url": "https://unsplash.com/photos/yC-Yzbqy7PY",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1",
        "author": "Alejandro Escamilla",
        "width": 4160,
        "height": 2340,
        "url": "https://unsplash.com/photos/LNRyGwIJr5c",
        "download_url": "https://lh3.googleusercontent.com/Bm9iXBTecaC__evnHs0_hjyUbyk4fxCBMcyCeGG54JH7aJlhVmz1zwIdOkeQXG-i-1owjjKQ0MiiAZoeyTjrBqNk0BF3TvOJvKNr9jpgbwbOlqP2QJmhsLjI12Ckllk_3Dwc-rJElRIR5hti0bA8yrg0-RKsKN4wvPdG1WmJkoLaOM90QeGjdtd8M7BIqn9godorXQb7-wPuQzIYOYPm4a-l7BejF0iGR-MCsdx-rJlHJ4-ZAwv9a8SYpO8kvwtCJEe1MoWGUlcxsnolCVEpy_zbdQ9YD4jtso_ON2nsdbwUliK5uIyNPH8wHOg0d8ZSJps9i8-gIdIkciy0Jgdhh2tB5tDgt18AdE6bxj8-DZjbentx-fqEW2BGvj6WAIQFd1rOqWIyBXS9acvOlJEdqIksIAZhcE2ugUWiopDe4TrtDiAWpFONBcDoKUTX_ZMQv7DiXSdodz0SXsmXt5Ga6gh9NEZ7-n1B4LpwP_dFxts62U5TCCC3xkWP8UEcjug4sewtKUM7w2YIFBlu7U-geVs2v_WfztPKy4x7tQdwPCVBYalclF1dbHb8pOKiypKoZuGXePypUiPt7bW133j298z7_aH0GIQLB2Us1f0zrLOI-Q6faeyeTnjx6ZEl7QFuV-qE39jr5u4v8EO3xXjPx96-3gxmQXM=w2838-h1596-no"
      },
      {
        "id": "10",
        "author": "Paul Jarvis",
        "width": 2500,
        "height": 1667,
        "url": "https://unsplash.com/photos/6J--NXulQCs",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "100",
        "author": "Tina Rataj",
        "width": 2500,
        "height": 1656,
        "url": "https://unsplash.com/photos/pwaaqfoMibI",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1000",
        "author": "Lukas Budimaier",
        "width": 5626,
        "height": 3635,
        "url": "https://unsplash.com/photos/6cY-FvMlmkQ",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1001",
        "author": "Danielle MacInnes",
        "width": 5616,
        "height": 3744,
        "url": "https://unsplash.com/photos/1DkWWN1dr-s",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1002",
        "author": "NASA",
        "width": 4312,
        "height": 2868,
        "url": "https://unsplash.com/photos/6-jTZysYY_U",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1003",
        "author": "E+N Photographies",
        "width": 1181,
        "height": 1772,
        "url": "https://unsplash.com/photos/GYumuBnTqKc",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1004",
        "author": "Greg Rakozy",
        "width": 5616,
        "height": 3744,
        "url": "https://unsplash.com/photos/SSxIGsySh8o",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1005",
        "author": "Matthew Wiebe",
        "width": 5760,
        "height": 3840,
        "url": "https://unsplash.com/photos/tBtuxtLvAZs",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1",
        "author": "Alejandro Escamilla",
        "width": 5616,
        "height": 3744,
        "url": "https://unsplash.com/photos/LNRyGwIJr5c",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "10",
        "author": "Paul Jarvis",
        "width": 2500,
        "height": 1667,
        "url": "https://unsplash.com/photos/6J--NXulQCs",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "100",
        "author": "Tina Rataj",
        "width": 2500,
        "height": 1656,
        "url": "https://unsplash.com/photos/pwaaqfoMibI",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1000",
        "author": "Lukas Budimaier",
        "width": 5626,
        "height": 3635,
        "url": "https://unsplash.com/photos/6cY-FvMlmkQ",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1001",
        "author": "Danielle MacInnes",
        "width": 5616,
        "height": 3744,
        "url": "https://unsplash.com/photos/1DkWWN1dr-s",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1002",
        "author": "NASA",
        "width": 4312,
        "height": 2868,
        "url": "https://unsplash.com/photos/6-jTZysYY_U",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1003",
        "author": "E+N Photographies",
        "width": 1181,
        "height": 1772,
        "url": "https://unsplash.com/photos/GYumuBnTqKc",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1010",
        "author": "Samantha Sophia",
        "width": 5184,
        "height": 3456,
        "url": "https://unsplash.com/photos/NaWKMlp3tVs",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1011",
        "author": "Roberto Nickson",
        "width": 5472,
        "height": 3648,
        "url": "https://unsplash.com/photos/7BjmDICVloE",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1012",
        "author": "Scott Webb",
        "width": 3973,
        "height": 2639,
        "url": "https://unsplash.com/photos/uAgLGG1WBd4",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1013",
        "author": "Cayton Heath",
        "width": 4256,
        "height": 2832,
        "url": "https://unsplash.com/photos/D8LcRLwZyPs",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1014",
        "author": "Oscar Keys",
        "width": 6016,
        "height": 4000,
        "url": "https://unsplash.com/photos/AmPRUnRb6N0",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1015",
        "author": "Alexey Topolyanskiy",
        "width": 6000,
        "height": 4000,
        "url": "https://unsplash.com/photos/-oWyJoSqBRM",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1016",
        "author": "Philippe Wuyts",
        "width": 3844,
        "height": 2563,
        "url": "https://unsplash.com/photos/_h7aBovKia4",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1018",
        "author": "Andrew Ridley",
        "width": 3914,
        "height": 2935,
        "url": "https://unsplash.com/photos/Kt5hRENuotI",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1012",
        "author": "Scott Webb",
        "width": 3973,
        "height": 2639,
        "url": "https://unsplash.com/photos/uAgLGG1WBd4",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1013",
        "author": "Cayton Heath",
        "width": 4256,
        "height": 2832,
        "url": "https://unsplash.com/photos/D8LcRLwZyPs",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1014",
        "author": "Oscar Keys",
        "width": 6016,
        "height": 4000,
        "url": "https://unsplash.com/photos/AmPRUnRb6N0",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1015",
        "author": "Alexey Topolyanskiy",
        "width": 6000,
        "height": 4000,
        "url": "https://unsplash.com/photos/-oWyJoSqBRM",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1016",
        "author": "Philippe Wuyts",
        "width": 3844,
        "height": 2563,
        "url": "https://unsplash.com/photos/_h7aBovKia4",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1018",
        "author": "Andrew Ridley",
        "width": 3914,
        "height": 2935,
        "url": "https://unsplash.com/photos/Kt5hRENuotI",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1012",
        "author": "Scott Webb",
        "width": 3973,
        "height": 2639,
        "url": "https://unsplash.com/photos/uAgLGG1WBd4",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1013",
        "author": "Cayton Heath",
        "width": 4256,
        "height": 2832,
        "url": "https://unsplash.com/photos/D8LcRLwZyPs",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1014",
        "author": "Oscar Keys",
        "width": 6016,
        "height": 4000,
        "url": "https://unsplash.com/photos/AmPRUnRb6N0",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1015",
        "author": "Alexey Topolyanskiy",
        "width": 6000,
        "height": 4000,
        "url": "https://unsplash.com/photos/-oWyJoSqBRM",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1005",
        "author": "Matthew Wiebe",
        "width": 5760,
        "height": 3840,
        "url": "https://unsplash.com/photos/tBtuxtLvAZs",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1006",
        "author": "Vladimir Kudinov",
        "width": 3000,
        "height": 2000,
        "url": "https://unsplash.com/photos/-wWRHIUklxM",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1008",
        "author": "Benjamin Combs",
        "width": 5616,
        "height": 3744,
        "url": "https://unsplash.com/photos/5L4XAgMSno0",
        "download_url": "https://via.placeholder.com/150"
      },
      {
        "id": "1009",
        "author": "Christopher Campbell",
        "width": 5000,
        "height": 7502,
        "url": "https://unsplash.com/photos/CMWRIzyMKZk",
        "download_url": "https://via.placeholder.com/150"
      },
    ]
  )

  const ref = React.createRef();
  return (
    <div className="App">
      <Grid images={images} rowHeight={200} ref={ref} margin={5} />
    </div>
  );
}

export default App