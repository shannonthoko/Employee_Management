import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Result from "./Result";
import API from "../utils/API";

class Container extends Component {
  state = {
    
    people: []
  };


  
  componentDidMount() {
    API.fetch()
    .then(res => this.setState({ people: res.data.results}))
    .catch(err => console.log(err));
    console.log(this.state.people); 
  }

  handleFormSubmitWomen = event => {

    event.preventDefault();
    alert(`Hello ${this.state}`);
    API.fetchWomen()
    .then(res => this.setState({ people: res.data.results}))
    .catch(err => console.log(err));
    console.log(this.state.people); 
    
  }

  handleFormSubmitMen = event => {

    event.preventDefault();
    alert(`Hello ${this.state}`);
    API.fetchMen()
    .then(res => this.setState({ people: res.data.results}))
    .catch(err => console.log(err));
    console.log(this.state.people); 
    
  }



  
  render() {
    return (
      <div>
        <SearchForm
          all = {this.state.people}
          handleFormSubmitWomen={this.handleFormSubmitWomen}
          // handleInputChange={this.handleInputChange}
          handleFormSubmitMen = {this.handleFormSubmitMen}
        />
        <Result all={this.state.people}  />
      </div>
    );
  }
}

export default Container;
