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
      searchText: ""
    };
  }

  searchTextChange = event => {
    this.setState({ searchText: event.target.value });
    this.props.filterCountries(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input id="searchBox" type="text" onChange={this.searchTextChange} width={50} value={this.setState.searchText} />
          <CountryList countries={this.props.countries} />
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
