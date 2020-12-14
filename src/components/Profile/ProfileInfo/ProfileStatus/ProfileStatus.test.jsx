import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
import React from "react";

describe("ProfileStatus component", () => {
  test("profileStatus should be in component", () => {
    const component = create(<ProfileStatus status="Hello Samurai"/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Hello Samurai");
  });

  test("component should be display span with status", () => {
    const component = create(<ProfileStatus status="Hello Samurai"/>);
    const instance = component.root;
    const span = instance.findByType("span");
    expect(span).toBeDefined();
    expect(span.children[0]).toBe("Hello Samurai")
  });

  test("component shouldn't display input", () => {
    const component = create(<ProfileStatus/>);
    const instance = component.root;
    expect(() => {
      const input = instance.findByType("input");
    }).toThrow();
  });

  test("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="Hello Samurai"/>);
    const instance = component.root;
    const span = instance.findByType("span");
    span.props.onDoubleClick();
    const input = instance.findByType("input")
    expect(input.props.value).toBe("Hello Samurai")
  });

  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="Hello Samurai" updateStatus={mockCallback}/>);
    const instance = component.getInstance();
    instance.offEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});


// describe("Button component", () => {
//   test("it shows the expected text when clicked (testing the wrong way!)", () => {
//     const component = create(<Button text="SUBSCRIBE TO BASIC"/>);
//     const instance = component.root;
//     const button = instance.findByType("button");
//     button.props.onClick();
//     expect(button.props.children).toBe("PROCEED TO CHECKOUT");
//   });
// });