import React from "react";
import { create } from "react-test-renderer";
import CountryCard from '../Components/CountryCard';
import { mountWrap, shallowWrap } from '../testUtils/contextWrap';

describe("Country card component", () => {
    let country = {
        "alpha3Code":"AUS",
        "flag":"https://restcountries.eu/data/aut.svg",
        "name":"Austria",
        "population":"8725931",
        "region":"Europe",
        "capital":"Vienna",
        "numericCode": "040"
    };  
    let props = {data:country};
    let component;
    const wrappedShallow = () => shallowWrap(<CountryCard {...props} />);
  
    const wrappedMount = () => mountWrap(<CountryCard {...props} />);
  
    test("Matches the snapshot", () => {
        const wrapper = wrappedShallow();
        expect(wrapper).toMatchSnapshot();
    });
});