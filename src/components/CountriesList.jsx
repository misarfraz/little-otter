import React, { Component } from "react";

import CountryCard from "./CountryCard";
import Pagination from "./Pagination";

const COUNTRIES_PER_PAGE = 20;

export class CountriesList extends Component {
  state = {
    pageNumber: 1,
    pageCount: 0
  };

  componentDidMount() {
    const countriesCount = Object.keys(this.props.countries).length;
    const pageCount = Math.ceil(countriesCount / COUNTRIES_PER_PAGE);

    this.setState({ ...this.state, pageCount });
  }

  getContinentCountries = () => {
    let continentCountries = {};
    for (const [key, value] of Object.entries(this.props.continentCodes)) {
      if (value === this.props.continent) {
        continentCountries[key] = this.props.countries[key];
        console.log(key, value);
      }
    }

    console.log(this.props.continent);

    continentCountries = Object.keys(continentCountries).length
      ? continentCountries
      : this.props.countries;

    return Object.entries(continentCountries);
  };

  setPageNumber = pageNumber => {
    this.setState({ ...this.state, pageNumber });
  };

  render() {
    return (
      <>
        <ul>
          {this.getContinentCountries()
            .slice(
              (this.state.pageNumber - 1) * COUNTRIES_PER_PAGE,
              this.state.pageNumber * COUNTRIES_PER_PAGE
            )
            .map(([isoCode, name]) => (
              <CountryCard key={isoCode} name={name} isoCode={isoCode} />
            ))}
        </ul>
        <Pagination
          setPageNumber={this.setPageNumber}
          pageNumber={this.state.pageNumber}
          pageCount={this.state.pageCount}
        />
      </>
    );
  }
}

export default CountriesList;
