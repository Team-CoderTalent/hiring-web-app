import React from "react";
import { shallow } from "enzyme";
import SearchBar from "../";

it("renders without crashing", () => {
  shallow(<SearchBar />);
});
