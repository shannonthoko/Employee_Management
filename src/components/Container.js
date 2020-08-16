import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Result from "./Result";
import API from "../utils/API";


class Container extends Component {
  state = {
    search: "",
    people: []
  };


  
  componentDidMount() {
    this.seeAll();
    
  }

  seeAll (){
    API.fetch()
    .then(res => this.setState({ people: res.data.results}))
    .catch(err => console.log(err));
    console.log(this.state.people);
  }

  

  handleFormSubmit = event => {
    event.preventDefault();
    this.seeAll();

  }

  handleFormSubmitWomen = event => {

    event.preventDefault();
    API.fetchWomen()
    .then(res => this.setState({ people: res.data.results}))
    .catch(err => console.log(err));
    
    
  }

  handleFormSubmitMen = event => {

    event.preventDefault();
    API.fetchMen()
    .then(res => this.setState({ people: res.data.results}))
    .catch(err => console.log(err));
    
    
  }



  
  render() {
    return (
      <div>
        <SearchForm
          all = {this.state.people}
          handleFormSubmitWomen={this.handleFormSubmitWomen}
          handleFormSubmit={this.handleFormSubmit}
          handleFormSubmitMen = {this.handleFormSubmitMen}
        />
        <Result all={this.state.people}  />
       
      </div>
    );
  }
};

export default Container;
