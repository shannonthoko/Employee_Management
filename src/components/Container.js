import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Result from "./Result";
import API from "../utils/API";

class Container extends Component {
  state = {
    search: "",
    results: []
  };


  
  componentDidMount() {
    this.employees();
  }


  
  employees = () => {

   
    API.fetch()
    .then(res => this.setState({ results: res.data.results}))
    .catch(err => console.log(err));
    console.log(this.state.results);
    
  }
  
  
  
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  
  // When the form is submitted, search the Giphy API for `this.state.search`
  // handleFormSubmit = event => {
    // event.preventDefault();
    
  // };



  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Result results={this.state.results} />
      </div>
    );
  }
}

export default Container;
