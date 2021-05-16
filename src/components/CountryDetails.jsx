import React, { Component } from "react";
import { Link } from "react-router-dom";

import Loading from "./Loading";

import { CURRENCY_HTML_CODES } from "../currencies";

export class CountryDetails extends Component {
  state = {
    imageExists: false
  };

  componentDidMount = () => {
    this.isImageAvailable(
      `https://www.countryflags.io/${this.props.match.params.id.toLowerCase()}/flat/16.png`
    );
  };

  isImageAvailable = imageSrc => {
    var img = new Image();
    img.onload = () => this.setState({ imageExists: true });
    img.onerror = () => this.setState({ imageExists: false });
    img.src = imageSrc;
  };

  render() {
    const {
      match: {
        params: { id }
      },
      countriesList,
      continentCodes,
      iso3List,
      capitalList,
      phoneList,
      currencyList
    } = this.props;

    const countryName = countriesList[id];
    const countryContinent = continentCodes[id];
    const countryISO3 = iso3List[id];
    const countryCapital = capitalList[id];
    const countryPhoneCode = phoneList[id];
    const countryCurrency = currencyList[id];
    const countryCurrencySymbol = CURRENCY_HTML_CODES[countryCurrency];
    const wikipediaURL = `https://en.wikipedia.org/wiki/${countryName}`;

    return (
      <>
        <Link to="/">
          <h1 className="back-button">
            <span className="chevron left" />
            <span>Back to Home</span>
          </h1>
        </Link>

        {this.props.isLoaded ? (
          <div className="country-details">
            <h1>
              {countryName}
              {this.state.imageExists && (
                <img
                  src={`https://www.countryflags.io/${id.toLowerCase()}/flat/48.png`}
                  alt=""
                />
              )}
            </h1>
            <table>
              <tbody>
                <tr>
                  <th>Continent</th>
                  <td>{countryContinent}</td>
                </tr>
                <tr>
                  <th>ISO Code</th>
                  <td>{countryISO3}</td>
                </tr>
                <tr>
                  <th>Capital</th>
                  <td>{countryCapital}</td>
                </tr>
                <tr>
                  <th>Phone Code</th>
                  <td>{countryPhoneCode}</td>
                </tr>
                <tr>
                  <th>Currency Code</th>
                  <td>{countryCurrency}</td>
                </tr>
                {countryCurrencySymbol && (
                  <tr>
                    <th>Currency Symbol</th>
                    <td
                      dangerouslySetInnerHTML={{
                        __html: countryCurrencySymbol
                      }}
                    />
                  </tr>
                )}
                <tr>
                  <th>Wikipedia Article</th>
                  <td>
                    <a href={wikipediaURL} target="_blank" rel="noreferrer">
                      {wikipediaURL}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

export default CountryDetails;
