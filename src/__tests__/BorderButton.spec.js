import React from "react";
import { create } from "react-test-renderer";
import Border from '../Components/BorderButton';

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<Border data={{alpha3Code:"AUS"}} onClick={()=>{}}/>);
    expect(button.toJSON()).toMatchSnapshot();
  });
});