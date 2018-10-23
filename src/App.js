import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryList from './js/components/CountryListPage';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from './js/actions/index';

const mapStateToProps = state => {
  return { countries: state.countries };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      showCountries: false,
      filteredCounties: this.props.countries,
      selectedIndex: 0
    };
  }

  componentWillReceiveProps (newProps) {
    this.setState({ filteredCounties: newProps.countries });
  }

  searchTextChange = (event) => {
    const searchTerm = event.target.value.trim();
    const showCountries = searchTerm.length > 0;
    this.setState({
      searchText: searchTerm,
      showCountries,
      selectedIndex: 0
    });
    setTimeout(() => this.props.filterCountries(searchTerm), 500);
  }

  setCountry = country => {
    debugger;
    this.setState({
      searchText: country,
      showCountries: false,
      selectedIndex: 0
    });
  }

  onSearchTextKeyDown = key => {
    debugger;
    const { selectedIndex, filteredCounties } = this.state;

    if (key.keyCode === 13) { //enter
      this.setCountry(filteredCounties[selectedIndex].name);
    }
    else if (key.keyCode === 38) { //up
      if (selectedIndex === 0) {
        return;
      }
      this.setState({ selectedIndex: selectedIndex - 1 });
    }
    else if (key.keyCode === 40) { //down
      if (selectedIndex + 1 === filteredCounties.length) {
        return;
      }
      this.setState({ selectedIndex: selectedIndex + 1 });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Auto Complete Demo</h1>
          </div>
          <div>
            <input
              id="searchBox"
              type="text"
              onChange={this.searchTextChange}
              onKeyDown={this.onSearchTextKeyDown}
              value={this.state.searchText}
              className="searchBox"
            />
          </div>
          { this.state.showCountries &&
            <CountryList
              countries={this.state.filteredCounties}
              selectedIndex={this.state.selectedIndex}
              setCountry={this.setCountry}
            />
          }
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
