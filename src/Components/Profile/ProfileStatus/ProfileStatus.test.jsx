import React from "react";
import ProfileStatus from "./ProfileStatus";
import { create } from "react-test-renderer";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="Arsenchk" />);
    const instance = component.getInstance();
    expect(instance.state.currentStatus).toBe("Arsenchk");
  });

  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status="Arsenchk" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span).not.toBeNull();
  });
  
  test("after creation <input> should not be displayed", () => {
    const component = create(<ProfileStatus status="Arsenchk" />);
    const root = component.root;
    expect(() => root.findByType("input")).toThrow(); // Expect no input initially
  });

  test("after creation span should display the correct text", () => {
    const component = create(<ProfileStatus status="Arsenchk" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0]).toBe("Arsenchk");
  });

  test("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="Arsenchk" />);
    const root = component.root;
    const span = root.findByType("span");

    span.props.onDoubleClick();

    const input = root.findByType("input");
    expect(input.props.value).toBe("Arsenchk");
  });
});
