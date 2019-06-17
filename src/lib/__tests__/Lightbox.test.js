import Lightbox from "../components/Lightbox";
import React from "react";
import { shallow, mount, render } from "enzyme";

describe("Lightbox component", () => {
  let images;
  let wrapper;
  let onNextSpy, onPrevSpy, onCloseSpy;
  beforeEach(() => {
    onNextSpy = jest.fn();
    onPrevSpy = jest.fn();
    onCloseSpy = jest.fn();
    wrapper = shallow(
      <Lightbox
        selectedImage={"fake"}
        onClose={onCloseSpy}
        onPrev={onPrevSpy}
        onNext={onNextSpy}
      />
    );
  });
  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call the prev handler on click of left button", () => {
    wrapper.find(".left-arrow").simulate("mouseEnter");
    wrapper.find(".left-arrow").simulate("click");
    expect(onPrevSpy).toHaveBeenCalledTimes(1);
  });

  it("should call the prev handler on keypress of ArrowLeft", () => {
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const wrapper = mount(
      <Lightbox
        selectedImage={"fake"}
        onClose={onCloseSpy}
        onPrev={onPrevSpy}
        onNext={onNextSpy}
      />
    );
    map.keyup({ code: "ArrowLeft" });
    expect(onPrevSpy).toHaveBeenCalledTimes(1);
  });

  it("should call the next handler on click of right button", () => {
    wrapper.find(".right-arrow").simulate("mouseEnter");
    wrapper.find(".right-arrow").simulate("click");
    expect(onNextSpy).toHaveBeenCalledTimes(1);
  });

  it("should call the next handler on keypress of ArrowRight", () => {
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const wrapper = mount(
      <Lightbox
        selectedImage={"fake"}
        onClose={onCloseSpy}
        onPrev={onPrevSpy}
        onNext={onNextSpy}
      />
    );
    map.keyup({ code: "ArrowRight" });
    expect(onNextSpy).toHaveBeenCalledTimes(1);
  });

  it("should call the close handler on click of close button", () => {
    wrapper.find(".back-button").simulate("click");
    expect(onCloseSpy).toHaveBeenCalledTimes(1);
  });

  it("should call the close handler on keypress of Escape", () => {
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const wrapper = mount(
      <Lightbox
        selectedImage={"fake"}
        onClose={onCloseSpy}
        onPrev={onPrevSpy}
        onNext={onNextSpy}
      />
    );
    map.keyup({ code: "Escape" });
    expect(onCloseSpy).toHaveBeenCalledTimes(1);
  });
});
