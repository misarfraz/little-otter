import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Landing from "./components/Landing";
import CountryDetails from "./components/CountryDetails";

import "./App.css";

class App extends React.Component {
  state = {
    isLoaded: false,

    countriesList: {},
    continentCodes: {},
    iso3List: {},
    capitalList: {},
    phoneList: {},
    currencyList: {}
  };

  componentDidMount() {
    Promise.all([
      fetch("/api/continent").then(res => res.json()),
      fetch("/api/names").then(res => res.json()),
      fetch("/api/iso3").then(res => res.json()),
      fetch("/api/capital").then(res => res.json()),
      fetch("/api/phone").then(res => res.json()),
      fetch("/api/currency").then(res => res.json())
    ]).then(
      ([
        continentCodes,
        countriesList,
        iso3List,
        capitalList,
        phoneList,
        currencyList
      ]) => {
        this.setState({
          ...this.state,
          continentCodes,
          countriesList,
          iso3List,
          capitalList,
          phoneList,
          currencyList,
          isLoaded: true
        });
      },
      error => {
        this.setState({
          ...this.state,
          isLoaded: false
        });
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={matchProps => (
                <Landing
                  {...matchProps}
                  isLoaded={this.state.isLoaded}
                  countries={this.state.countriesList}
                  continentCodes={this.state.continentCodes}
                />
              )}
            />
            <Route
              exact
              path="/:id"
              component={matchProps => (
                <CountryDetails
                  {...matchProps}
                  countriesList={this.state.countriesList}
                  continentCodes={this.state.continentCodes}
                  iso3List={this.state.iso3List}
                  capitalList={this.state.capitalList}
                  phoneList={this.state.phoneList}
                  currencyList={this.state.currencyList}
                  isLoaded={this.state.isLoaded}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
