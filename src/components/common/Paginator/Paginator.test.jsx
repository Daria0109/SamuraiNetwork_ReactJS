import {create} from "react-test-renderer";
import React from "react";
import Paginator from "./Paginator";

describe("Paginator component", () => {
  test("amount of spans with pages should be 10", () => {
    const component = create(<Paginator totalUsersCount={100}
                                        pageSize={10}
                                        currentPage={1}
                                        portionSize={10}/>);
    const instance = component.root;
    const span = instance.findAllByType("span");
    expect(span.length).toBe(10);
  })

  test("if amount of pages more than 1, button NEXT should be present", () => {
    const component = create(<Paginator totalUsersCount={11}
                                        pageSize={1}
                                        portionSize={10}/>);
    const instance = component.root;
    const button = instance.findAllByType("button");
    expect(button.length).toBe(1);
  })
})