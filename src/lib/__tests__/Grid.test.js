import Grid from "../components/Grid";
import React from "react";
import { shallow, mount, render } from "enzyme";

describe("Grid component", () => {
  let images;
  let wrapper;
  beforeEach(() => {
    images = [
      {
        src: "fake",
        width: 100,
        height: 100
      }
    ];

    wrapper = shallow(<Grid images={images} rowHeight={100} width={500} />);
  });
  it("should render no images", () => {
    images = [];
    wrapper = shallow(<Grid images={images} rowHeight={100} width={500} />);
    expect(wrapper.find(".grid-container")).toHaveLength(1);
    expect(wrapper.find(".grid-row")).toHaveLength(0);
    expect(wrapper.find(".grid-img")).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render one image", () => {
    expect(wrapper.find(".grid-container")).toHaveLength(1);
    expect(wrapper.find(".grid-row")).toHaveLength(1);
    expect(wrapper.find(".grid-img")).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render many images", () => {
    images = [
      { src: "https://via.placeholder.com/371x463", width: 3710, height: 4630 },
      { src: "https://via.placeholder.com/278x587", width: 2780, height: 5870 },
      { src: "https://via.placeholder.com/364x415", width: 3640, height: 4150 },
      { src: "https://via.placeholder.com/490x463", width: 4900, height: 4630 },
      { src: "https://via.placeholder.com/480x490", width: 4800, height: 4900 },
      { src: "https://via.placeholder.com/214x551", width: 2140, height: 5510 },
      { src: "https://via.placeholder.com/669x506", width: 6690, height: 5060 },
      { src: "https://via.placeholder.com/509x583", width: 5090, height: 5830 },
      { src: "https://via.placeholder.com/320x362", width: 3200, height: 3620 },
      { src: "https://via.placeholder.com/304x449", width: 3040, height: 4490 }
    ];
    wrapper = shallow(<Grid images={images} rowHeight={100} width={500} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should respond to different widths", () => {
    images = [
      { src: "https://via.placeholder.com/371x463", width: 3710, height: 4630 },
      { src: "https://via.placeholder.com/278x587", width: 2780, height: 5870 },
      { src: "https://via.placeholder.com/364x415", width: 3640, height: 4150 },
      { src: "https://via.placeholder.com/490x463", width: 4900, height: 4630 },
      { src: "https://via.placeholder.com/480x490", width: 4800, height: 4900 },
      { src: "https://via.placeholder.com/214x551", width: 2140, height: 5510 },
      { src: "https://via.placeholder.com/669x506", width: 6690, height: 5060 },
      { src: "https://via.placeholder.com/509x583", width: 5090, height: 5830 },
      { src: "https://via.placeholder.com/320x362", width: 3200, height: 3620 },
      { src: "https://via.placeholder.com/304x449", width: 3040, height: 4490 }
    ];
    wrapper = shallow(<Grid images={images} rowHeight={100} width={900} />);
    expect(wrapper).toMatchSnapshot();
  });
});
