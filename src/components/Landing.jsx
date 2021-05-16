import React, { Component } from "react";

import CountriesList from "./CountriesList";
import Select from "./Select";
import Loading from "./Loading";

const continents = {
  "": "(All)",
  AF: "Africa",
  AS: "Asia",
  EU: "Europe",
  NA: "North America",
  OC: "Oceania",
  SA: "South America"
};

export class Landing extends Component {
  state = {
    continent: "",
    country: ""
  };

  componentDidUpdate() {
    if (!!this.state.country) this.props.history.push(`/${this.state.country}`);
  }

  handleSelect = event => {
    this.setState({ ...this.state, [event.target.id]: event.target.value });
  };

  render() {
    const { isLoaded, countries, continentCodes } = this.props;

    return (
      <>
        <h1>Country Data</h1>

        {isLoaded ? (
          <>
            <Select
              id={"continent"}
              label={"Select a Continent"}
              options={continents}
              handleSelect={this.handleSelect}
            />
            <Select
              id={"country"}
              label={"Select a Country"}
              options={{ "": "(All)", ...countries }}
              handleSelect={this.handleSelect}
            />
            <CountriesList
              continent={this.state.continent}
              countries={countries}
              continentCodes={continentCodes}
            />
          </>
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

export default Landing;
